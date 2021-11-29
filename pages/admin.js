import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

import { set_cookie } from '../helpers/cookies';

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

const Admin = ({ isLogged }) => {
  const router = useRouter();

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

    try {
      const res = await axios.post('https://sac-backend-v1.herokuapp.com/admin/login', {
        login,
        senha
      });

      const auth = res.headers.authentication;
      set_cookie('authorization', auth);

      router.push('/dashboard');
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
                    <Input type="text" name="login" id="login" onChange={(e) => {setLogin(e.target.value)}}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="senha">Senha</Label>
                    <Input type="password" name="senha" id="senha" onChange={(e) => {setSenha(e.target.value)}}/>
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
  const cookies = ctx?.req?.headers?.cookie;
  const isLogged = cookies?.includes('authorization')

  return { props: { isLogged } };
};


export default Admin;