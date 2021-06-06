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

const Dashboard = ({ agendamentos, error }) => {
  const datasCadastradas = [
    "11/06/2021 09:30",
    "12/06/2021 11:40",
  ]

  const [openAgendamento, setOpenAgendamento] = React.useState(false);
  const [openDatas, setOpenDatas] = React.useState(false);

  return (
    <Layout pageTitle="Santos as Cegas | Dashboard" inicio="dashboard">
      <section className="dashboard" id="dashboard">
        <Container>

          <Button style={{ marginBottom: '1.2rem' }}>Sair</Button>

          <Button className="collapseHeader" onClick={() => {setOpenDatas(!openDatas)}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Liberar datas para agendamento</span>
              <FaArrowDown size={24} />
            </div>
          </Button>

          <Collapse isOpen={openDatas}>
            <DatasCadastro 
              datas={datasCadastradas}
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
    const res = await axios.get('http://0.0.0.0:8080/agendamento/');
    const agendamentos = res.data;
    return { agendamentos };
  } catch (error) {
    return { error };
  }
};

export default Dashboard;