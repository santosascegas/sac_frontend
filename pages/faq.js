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
    <Layout pageTitle="Santos as Cegas | Dúvidas Frequentes" inicio="faq">
      <section className="faq" id="faq">
        <Container>
          <h2>Dúvidas Frequentes</h2>

         
        </Container>
      </section>
    </Layout>
  )
}
export default Index;