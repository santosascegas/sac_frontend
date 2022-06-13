import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

import Layout from "../components/Common/Layout";

import { 
  Container, 
  Form, 
  FormGroup,
  Label,
  Input,
  Button,
  Spinner
} from "reactstrap";
import Cookies from 'universal-cookie';

const Admin = ({ isLogged }) => {
  const cookies = new Cookies()
  const router = useRouter();

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const [login, setLogin] = React.useState(null);
  const [senha, setSenha] = React.useState(null);

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (isLogged) router.push('/dashboard');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setInterval( () => {}, 500)

    console.log(login, senha)

    try {
      const params = new URLSearchParams();
      params.append('username', login)
      params.append('password', senha)
      const res = await axios.post('http://localhost:8080/api/login', params)

      cookies.set("access_token", res.data["access_token"], {sameSite: 'None'})
      cookies.set("refresh_token", res.data["refresh_token"], {sameSite: 'None'})

      router.push('/dashboard')
      setLoading(false);
      } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Layout pageTitle="Santos as Cegas | Admin" inicio="admin" neverStick={true}> 
      <section className="admin" id="admin">
        <Container>
          <img
            alt="Santos às cegas: Marca Santos às cegas. Texto e desenhos nas cores vermelho e preto"
            src="./images/logo-principal.png"
            width="220"
            height="180"
            className="d-inline-block align-top"
          />

{ error && (
            <p style={{ color: 'red' }}>{error}</p>
          ) }

          {
             loading ? (
              
              <div className="loadingContainer">
                <Spinner color="dark" aria-label="Logando" />
              </div>
              
            ) :
            (
              <>
                <Form className="userForm">
                  <FormGroup>
                    <Label for="login">Login</Label>
                    <Input type="text" name="login" id="login" ref={usernameRef} onChange={(e) => {setLogin(e.target.value)}}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="senha">Senha</Label>
                    <Input type="password" name="senha" id="senha" ref={passwordRef} onChange={(e) => {setSenha(e.target.value)}}/>
                  </FormGroup>
                </Form>

                <Button id="enviarAdmin" onClick={handleSubmit}>
                  Entrar
                </Button>
              </>
            )
          }
          
        </Container>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const cookies = new Cookies(ctx.req.headers.cookie)
  let isLogged
  if (cookies.get('refresh_token') || cookies.get('access_token')) {
    isLogged = true
  } else {
    isLogged = false
  }

  return { props: { isLogged } };
};

export default Admin;