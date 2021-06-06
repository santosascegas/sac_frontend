import React from 'react';

import Layout from "../components/Common/Layout";

import { 
  Container, 
  Row, 
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import { trajetos } from '../helpers/Trajetos'; 

const Index = () => {
  const [params, setParams] = React.useState({});

  const handleSubmit = () => {
    console.log(params);
  }

  const limpar = () => {
    setParams({})
  }

  return (
    <Layout pageTitle="Santos as Cegas | Fale Conosco" inicio="faleConosco">
      <section className="faleConosco" id="faleConosco">
        <Container>
          <h2>Fale Conosco</h2>

          <Row>
            <Col lg={4}>
                <div className="faleConoscoImg">
                  <img 
                    src='./images/sac_camisa.jpg'
                    alt=''
                  />
                </div>
            </Col>

            <Col lg={8}>
               <p>Nós queremos ouvir você! Por favor, preencha o formulário abaixo para entrar em contato conosco.</p>
               <Form className="userForm">
                <FormGroup>
                  <Label for="nome">Nome</Label>
                  <Input type="text" name="nome" id="nome" value={params.nome || ''}
                    onChange={(e) => {
                      setParams({...params, nome: e.target.value})
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Email">E-mail</Label>
                  <Input type="email" name="email" id="Email" value={params.email || ''} 
                    onChange={(e) => {
                      setParams({...params, email: e.target.value})
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="telefone">Telefone</Label>
                  <Input type="number" name="telefone" id="telefone" value={params.telefone || ''} 
                    onChange={(e) => {
                      setParams({...params, telefone: e.target.value})
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="assunto">Assunto</Label>
                  <Input type="text" name="assunto" id="assunto" value={params.assunto || ''} 
                    onChange={(e) => {
                      setParams({...params, assunto: e.target.value})
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="mensagem">Mensagem</Label>
                  <Input type="textarea" name="text" id="mensagem" value={params.mensagem || ''}
                    onChange={(e) => {
                      setParams({...params, mensagem: e.target.value})
                    }}
                  />
                </FormGroup>
              </Form>

              <Button className="actionButton" onClick={handleSubmit}>
                Enviar
              </Button>
              <Button className="actionButton" onClick={limpar}>
                Limpar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
export default Index;