import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Layout from "../components/Common/Layout"
import UserTable from "../components/Dashboard/UserTable"
import DatasCadastro from "../components/Dashboard/DatasCadastro"
import Posts from "../components/Dashboard/Posts"

import Cookies from 'universal-cookie'

import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

import { 
  Container, 
  Button,
  Collapse
} from "reactstrap"

import { useRouter } from 'next/router'


const Dashboard = ({ datas, agendamentos, posts, error }) => {
  const router = useRouter()
  const cookies = new Cookies()

  const [datasD, setDatasD] = useState(datas || [])
  const [agendamentosD, setAgendamentosD] = useState(agendamentos || [])
  const [postsD, setPostsD] = useState(posts || [])

  const [openAgendamento, setOpenAgendamento] = useState(false)
  const [openDatas, setOpenDatas] = useState(false)
  const [openPosts, setOpenPosts] = useState(false)

  const handleLogout = async (e) => {
    e.preventDefault()

    cookies.remove('refresh_token')
    cookies.remove('access_token')
    router.push('/admin')
  }

  return (
    <Layout pageTitle="Santos as Cegas | Dashboard" inicio="dashboard" neverStick={true}>
      <section className="dashboard" id="dashboard">
        <Container>
          <Button style={{ marginBottom: '1.2rem' }} onClick={handleLogout}>
            Sair
          </Button>

          <Button className="collapseHeader" onClick={() => {setOpenDatas(!openDatas)}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Liberar datas para agendamento</span>
              { 
              openDatas ? 
                <FaArrowDown size={24} /> 
                :
                <FaArrowUp size={24} />
              }
            </div>
          </Button>

          <Collapse isOpen={openDatas}>
          <DatasCadastro 
              datas={datasD}
              setDatas={setDatasD}
            />
          </Collapse>


          <Button className="collapseHeader" onClick={() => {setOpenAgendamento(!openAgendamento)}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Consultar Trajetos Agendados </span>
              { 
              openAgendamento ? 
                <FaArrowDown size={24} /> 
                :
                <FaArrowUp size={24} />
              }
            </div>
          </Button>
          <Collapse isOpen={openAgendamento}>
            { error ? 
            (
              <div>Ocorreu um erro ao requisitar os agendamentos: {error.message}</div>
            ) :
              (
                <UserTable 
                  agendamentos={agendamentosD || []}
                />
              )
            }
            
          </Collapse>

          {/** Posts */}
          <Button className="collapseHeader" onClick={() => {setOpenPosts(!openPosts)}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Postagens </span>
              { 
              openPosts ? 
                <FaArrowDown size={24} /> 
                :
                <FaArrowUp size={24} />
              }
            </div>
          </Button>
          <Collapse isOpen={openPosts}>
            { error ? 
            (
              <div>Ocorreu um erro ao requisitar as postagens: {error.message}</div>
            ) :
              (
                <Posts posts={postsD} setPosts={setPostsD}/>
              )
            }
            
          </Collapse>
        </Container>
      </section>
    </Layout>
  )
}

export const getServerSideProps = async ctx => {
  const cook = ctx?.req?.headers?.cookie
  const cookies = new Cookies(ctx.req.headers.cookie)

  if (cook?.includes('access_token') === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/admin"
      }
    }
  }

  let tokens

  await fetch('http://localhost:8080/api/token/refresh', {
    headers: new Headers({
        Authorization: `Bearer ${cookies.get('refresh_token')}`
    })
  }).then( async (response) => {
    await response.json().then( (data) => {
      tokens = { access_token: data.access_token, refresh_token: data.refresh_token }
    })
  } ).catch( (error) => {
    return { props: { error } }
  } )

  if (tokens.access_token === undefined || tokens.refresh_token === undefined) {
    cookies.remove("access_token")
    cookies.remove("refresh_token")
    return {
      redirect: {
        permanent: false,
        destination: "/admin"
      }
    }
  }

  cookies.set('access_token', tokens.access_token)

  let agenda

  await fetch('http://localhost:8080/agenda/', {
    headers: new Headers({
        Authorization: `Bearer ${cookies.get('access_token')}`
    })
  }).then( async (response) => {
    await response.json().then( (data) => {
      agenda = data
    })
  } ).catch( (error) => {
    return { props: { error } }
  } )

  let agendamentos

  await fetch('http://localhost:8080/agendamento/', {
    headers: new Headers({
        Authorization: `Bearer ${cookies.get('access_token')}`
    })
  }).then( async (response) => {
    await response.json().then( (data) => {
      agendamentos = data
    })
  } ).catch( (error) => {
    return { props: { error } }
  } )

  let posts

  await fetch('http://localhost:8080/post/todos', {
    headers: new Headers({
        Authorization: `Bearer ${cookies.get('access_token')}`
    })
  }).then( async (response) => {
    await response.json().then( (data) => {
      posts = data
    })
  } ).catch( (error) => {
    return { props: { error } }
  } )

  return { props: { datas: agenda, agendamentos: agendamentos, posts: posts } }
}

export default Dashboard