import React from 'react';

import Layout from "../components/Common/Layout";
import DatePicker from "../components/Agendamento/DatePicker";
import UserForm from "../components/Agendamento/UserForm";
import Consentimento from "../components/Agendamento/Consentimento";

import { 
  Container, 
  Row, 
  Col 
} from "reactstrap";

const Index = () => {
  const [data, setData] = React.useState(null);
  const [userInfo, setUserInfo] = React.useState(null)

  return (
    <Layout pageTitle="Santos as Cegas | Agendamento" inicio="agendamento">
      <section className="agendamento" id="agendamento">
        <Container>
          <h2>Agendamento</h2>

          { !data && (
            <DatePicker setData={setData} />
          ) }

          { data && !userInfo && (
            <UserForm setUserInfo={setUserInfo}/>
          ) }

          {
            userInfo && (
              <Consentimento data={data} userInfo={userInfo} />
            )
          }
        </Container>
      </section>
    </Layout>
  )
}
export default Index;