import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

import Layout from "../components/Common/Layout";
import UserTable from "../components/Dashboard/UserTable";
import DatasCadastro from "../components/Dashboard/DatasCadastro";

import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import { delete_cookie } from '../helpers/cookies';

import { 
  Container, 
  Button,
  Collapse
} from "reactstrap";

import Link from 'next/link'

const Dashboard = ({ agendamentos, datas, error }) => {
  const router = useRouter();

  const [datasD, setDatasD] = React.useState(datas || []);

  const [openAgendamento, setOpenAgendamento] = React.useState(false);
  const [openDatas, setOpenDatas] = React.useState(false);

  const handleLogout = (e) => {
    e.preventDefault();

    delete_cookie('authorization')
    router.push('/admin');
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
                  agendamentos={agendamentos || []}
                />
              )
            }
            
          </Collapse>
        </Container>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const cookies = ctx.req?.headers.cookie;

  if (!cookies.includes('authorization')) 
    return {
      redirect: {
        permanent: false,
        destination: "/admin",
      },
      props: {},
    };
  
  const parts = cookies?.split('authorization=');

  try {
    const resAgendamento = await axios.get(`${process.env.API_URL}/agendamento/`, {
      headers: ctx.req ? { Authorization: parts[1] } : undefined
    });
    const resDatas = await axios.get(`${process.env.API_URL}/datas/status`);
    const agendamentos = resAgendamento.data;
    const datas = resDatas.data;
    const agendamentos = [];
    const datas = [];
    return { props: { agendamentos, datas }  };
  } catch (error) {
    return { props: { error } };
  }
};

export default Dashboard;