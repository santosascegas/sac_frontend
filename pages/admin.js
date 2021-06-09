import React from 'react';

import Layout from "../components/Common/Layout";

import { 
  Container, 
  Form, 
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import Link from 'next/link'

const Index = () => {
  const [login, setLogin] = React.useState(null);
  const [senha, setSenha] = React.useState(null);

  const handleSubmit = () => {
  }

  return (
    <Layout pageTitle="Santos as Cegas | Admin" inicio="admin" neverStick={true}> 
      <section className="admin" id="admin">
        <Container>
          <img
            alt=""
            src="./images/logo-principal.png"
            width="220"
            height="180"
            className="d-inline-block align-top"
          />

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

        <Link href="/dashboard">
          <Button id="enviarAdmin">
              Entrar
            </Button>
        </Link>
          
        </Container>
      </section>
    </Layout>
  )
}
export default Index;