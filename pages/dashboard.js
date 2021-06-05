import React from 'react';

import Layout from "../components/Common/Layout";
import UserTable from "../components/Dashboard/UserTable";
import DatasCadastro from "../components/Dashboard/DatasCadastro";

import { FaArrowDown } from 'react-icons/fa';

import { 
  Container, 
  Button,
  Collapse
} from "reactstrap";

const Index = () => {
  const agendamentos = [
    {
      data: '09/06/2021',
      nome: 'Marcel Losso Forte',
      email: 'marcel.losso@gmail.com',
      documento: '353.884.318-00',
      telefone: '13997823042',
      atestado: 'Sim'
    },
    {
      data: '10/06/2021',
      nome: 'Thamyres Sobral Siqueira',
      email: 'thamyres.siqueira@gmail.com',
      documento: '464.179.398-04',
      telefone: '13997823042',
      atestado: 'Não'
    },
  ]

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
            <UserTable 
              agendamentos={agendamentos}
            />
          </Collapse>
        </Container>
      </section>
    </Layout>
  )
}
export default Index;