import React from 'react';
import axios from 'axios';

import Layout from "../components/Common/Layout";
import DatePicker from "../components/Agendamento/DatePicker";
import UserForm from "../components/Agendamento/UserForm";
import Consentimento from "../components/Agendamento/Consentimento";

import { FaCheckCircle } from 'react-icons/fa';

import { 
  Container, 
  Spinner
} from "reactstrap";

const Agendamento = ({ datas }) => {
  const [data, setData] = React.useState(null);
  const [userInfo, setUserInfo] = React.useState(null);

  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  return (
    <Layout pageTitle="Santos as Cegas | Agendamento" inicio="agendamento" neverStick={true}>
      <section className="agendamento" id="agendamento">
        <Container>
          <h2>Agendamento</h2>

          { error && (
            <p style={{ color: 'red' }}>{error}</p>
          ) }

          { !data && (
            <DatePicker datas={datas} setData={setData} />
          ) }

          { data && !userInfo && (
            <UserForm setUserInfo={setUserInfo} setError={setError}/>
          ) }

          {
            userInfo && !success && !loading && (
              <Consentimento data={data} userInfo={userInfo} setSuccess={setSuccess} setError={setError} setLoading={setLoading}/>
            )
          }

          {
            userInfo && loading && (
              
              <div className="loadingContainer">
                <Spinner color="dark" aria-label="Enviando formulario" />
              </div>
              
            )
          }

          {
            success && (
              <div style={{ width: '100%', height: '50vh', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column' }}>
                <FaCheckCircle size={110}/>
                <h4 className="mt-3">Seu Agendamento foi feito!</h4>
                <p>Um e-mail de confirmação será enviado para você</p>
              </div>
            )
          }
        </Container>
      </section>
    </Layout>
  )
}

Agendamento.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://0.0.0.0:8080/datas/status');
    const datas = res.data;
    return { datas };
  } catch (error) {
    return { error };
  }
};


export default Agendamento;