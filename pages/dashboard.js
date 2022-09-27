import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Layout from "../components/Common/Layout"
import UserTable from "../components/Dashboard/UserTable"
import DatasCadastro from "../components/Dashboard/DatasCadastro"
import Posts from "../components/Dashboard/Posts"
import { RefreshToken } from '../helpers/refreshToken'

import Cookies from 'universal-cookie'

import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

import { 
  Container, 
  Button,
  Collapse
} from "reactstrap"

import { useRouter } from 'next/router'

const Dashboard = () => {
  const router = useRouter()
  const cookies = new Cookies()

  const [datasD, setDatasD] = useState([])
  const [agendamentosD, setAgendamentosD] = useState([])
  const [postsD, setPostsD] = useState([])
  const [count, setCount] = useState(0)

  const [openAgendamento, setOpenAgendamento] = useState(false)
  const [openDatas, setOpenDatas] = useState(false)
  const [openPosts, setOpenPosts] = useState(false)

  let token

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('refresh_token')
  }

  const auth = async () => {
    await RefreshToken(token).then( async (response) => {
      if (response.headers.Authorization == "Bearer undefined") {
        cookies.remove('refresh_token')
        cookies.remove('access_token')
        router.push("/admin")
      }
      await requestData()
    } )
  }

  auth()

  const requestData = async () => {
    if(count == 0) {
      await RefreshToken(token).then( async (config) => {
        await axios.get(`${process.env.URL_BACKEND}/post/todos`, config).then( (response) => {
          setPostsD(response.data)
        })
  
        await axios.get(`${process.env.URL_BACKEND}/agendamento/`, config).then( (response) => {
          setAgendamentosD(response.data)
        })
  
        await axios.get(`${process.env.URL_BACKEND}/agenda/`, config).then( (response) => {
          setDatasD(response.data)
        })
      })
      setCount(1)
    }
  }

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
            { (agendamentosD === []) ? 
            (
              <div>Ocorreu um erro ao requisitar os agendamentos!</div>
            ) :
              (
                <UserTable 
                  agendamentos={agendamentosD || []}
                />
              )
            }
            
          </Collapse>

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
            { (postsD === []) ? 
            (
              <div>Ocorreu um erro ao requisitar as postagens!</div>
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

export default Dashboard