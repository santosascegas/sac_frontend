import React from 'react';
import axios from 'axios';

import Layout from "../components/Common/Layout";
import UserTable from "../components/Dashboard/UserTable";
import DatasCadastro from "../components/Dashboard/DatasCadastro";

import { FaArrowDown } from 'react-icons/fa';

import { 
  Container, 
  Button,
  Collapse
} from "reactstrap";

import Link from 'next/link'

const Dashboard = ({ agendamentos, datas, error }) => {

  const [datasD, setDatasD] = React.useState(datas);

  const [openAgendamento, setOpenAgendamento] = React.useState(false);
  const [openDatas, setOpenDatas] = React.useState(false);

  return (
    <Layout pageTitle="Santos as Cegas | Dashboard" inicio="dashboard" neverStick={true}>
      <section className="dashboard" id="dashboard">
        <Container>

          <Link href="/">
            <Button style={{ marginBottom: '1.2rem' }}>
              Sair
            </Button>
          </Link>

          <Button className="collapseHeader" onClick={() => {setOpenDatas(!openDatas)}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Liberar datas para agendamento</span>
              <FaArrowDown size={24} />
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
              <FaArrowDown size={24} />
            </div>
          </Button>
          
          <Collapse isOpen={openAgendamento}>
            { error ? 
            (
              <div>Ocorreu um erro ao requisitar os agendamentos: {error.message}</div>
            ) :
              (
                <UserTable 
                  agendamentos={agendamentos}
                />
              )
            }
            
          </Collapse>
        </Container>
      </section>
    </Layout>
  )
}

Dashboard.getInitialProps = async ctx => {
  try {
    const resAgendamento = await axios.get('http://0.0.0.0:8080/agendamento/');
    const resDatas = await axios.get('http://0.0.0.0:8080/datas/status');
    const agendamentos = resAgendamento.data || [];
    const datas = resDatas.data || [];
    return { agendamentos, datas };
  } catch (error) {
    return { error };
  }
};

export default Dashboard;