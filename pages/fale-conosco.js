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

import InputMask from 'react-input-mask';
import axios from 'axios';

const Index = () => {
  const [params, setParams] = React.useState({});

  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  const handleSubmit = async () => {
    if (!/.+@.+\..+/.test(params.email)) {
      setError('Endereço de email inválido. Por favor, preencha com dados válidos');
      return;
    }

    const regexTelefone = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');

    if (regexTelefone.test(params.telefone)) {
      setError('Número de telefone inválido. Por favor, preencha com dados válidos');
      return;
    }

    if (!params.assunto) {
      setError('Um assunto é necessário');
      return;
    }

    if (!params.mensagem) {
      setError('Uma mensagem é necessária');
      return;
    }

    setError(null);
    
    try {
      await axios.post('http://localhost:8080/fale-conosco/', params);
      setSuccess('Mensagem enviada com sucesso!');
      limpar();
    } catch (error) {
      setError(error);
    }

  }

  const limpar = () => {
    setParams({})
  }

  return (
    <Layout pageTitle="Santos as Cegas | Fale Conosco" inicio="faleConosco" neverStick={true}>
      <section className="faleConosco" id="faleConosco">
        <Container>
          <h2>Fale Conosco</h2>

          { error && (
            <p style={{ color: 'red' }}>{error}</p>
          ) }

          { success && (
            <p style={{ color: 'green' }}>{success}</p>
          ) }
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
                <FormGroup className="required">
                  <Label for="nome">Nome</Label>
                  <Input type="text" name="nome" id="nome" value={params.nome || ''}
                    onChange={(e) => {
                      setParams({...params, nome: e.target.value})
                    }}
                  />
                </FormGroup>
                <FormGroup className="required">
                  <Label for="Email">E-mail</Label>
                  <Input type="email" name="email" id="Email" value={params.email || ''} 
                    onChange={(e) => {
                      setParams({...params, email: e.target.value})
                    }}
                  />
                </FormGroup>
                <FormGroup className="required">
                  <Label for="telefone">Telefone</Label>
                  <InputMask mask="(99) 99999-9999" value={params.telefone || ''}
                    onChange={(e) => {
                      setParams({...params, telefone: e.target.value})
                    }}
                  >
                    {(inputProps) => <Input {...inputProps} name="telefone" id="telefone" />}
                  </InputMask>
                </FormGroup>
                <FormGroup className="required">
                  <Label for="assunto">Assunto</Label>
                  <Input type="text" name="assunto" id="assunto" value={params.assunto || ''} 
                    onChange={(e) => {
                      setParams({...params, assunto: e.target.value})
                    }}
                  />
                </FormGroup>
                <FormGroup className="required">
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