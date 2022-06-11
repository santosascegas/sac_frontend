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
  Button,
  Spinner
} from "reactstrap";

import InputMask from 'react-input-mask';
import axios from 'axios';

const Index = () => {
  const [params, setParams] = React.useState({});

  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    if (!/.+@.+\..+/.test(params.email)) {
      setError('Endereço de email inválido. Por favor, preencha com dados válidos');
      return;
    }

    const regexTelefone = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');

    if (regexTelefone.test(params.phone)) {
      setError('Número de telefone inválido. Por favor, preencha com dados válidos');
      return;
    }

    if (!params.message) {
      setError('Uma mensagem de avaliação é necessária!');
      return;
    }

    setError(null);
    
    await axios.post('http://localhost:8080/post/', params);
    setSuccess('Avaliação enviada com sucesso!');
    limpar();
    setLoading(false);

  }

  const limpar = () => {
    setParams({})
  }
 
  return (
    <Layout pageTitle="Santos as Cegas | Minha experiência" inicio="minhaExperiencia" neverStick={true}>
      <section className="minhaExperiencia" id="minhaExperiencia">
        <Container>
          <h2>Minha Experiência</h2>

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
                    alt='Foto da camiseta vermelha com estampa branca do projeto Santos às cegas. Uma mão toca a parte do braile.'
                  />
                </div>
            </Col>

            <Col lg={8}>

            {
              loading ? (
              <div className="loadingContainer">
                <Spinner color="dark" aria-label="Enviando fale conosco" />
              </div>
            ) : (
              <>
                <h6>Envie uma avaliação do seu passeio, sendo possível enviar uma foto do passeio para registro.</h6>
                
                <p>O sinal de <span style={{ color: 'red' }}>*</span> indica que o preenchimento do campo é obrigatório</p>

                <Form className="userForm">
                  <FormGroup className="required">
                    <Label for="name">Nome</Label>
                    <Input type="text" name="name" id="name" value={params.name || ''}
                      onChange={(e) => {
                        setParams({...params, name: e.target.value})
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
                    <Label for="phone">Telefone</Label>
                    <InputMask mask="(99) 99999-9999" value={params.phone || ''}
                      onChange={(e) => {
                        setParams({...params, phone: e.target.value})
                      }}
                    >
                      {(inputProps) => <Input {...inputProps} name="phone" id="telefone" />}
                    </InputMask>
                  </FormGroup>
                  <FormGroup className="required">
                    <Label for="question_1">Pergunta 1</Label>
                    <Input type="radio" name="question_1" id="question_1" value={params.question_1 || ''} 
                      onChange={(e) => {
                        setParams({...params, question_1: e.target.value})
                      }}
                    />
                    <Input type="radio" name="question_1" id="question_1" value={params.question_1 || ''} 
                      onChange={(e) => {
                        setParams({...params, question_1: e.target.value})
                      }}
                    />
                  </FormGroup>
                  <FormGroup className="required">
                    <Label for="question_2">Pergunta 2</Label>
                    <Input type="radio" name="question_2" id="question_2" value={params.question_2 || ''} 
                      onChange={(e) => {
                        setParams({...params, question_2: e.target.value})
                      }}
                    />
                    <Input type="radio" name="question_2" id="question_2" value={params.question_2 || ''} 
                      onChange={(e) => {
                        setParams({...params, question_2: e.target.value})
                      }}
                    />
                  </FormGroup>
                  <FormGroup className="required">
                    <Label for="message">Mensagem</Label>
                    <Input type="textarea" name="message" id="message" value={params.message || ''}
                      onChange={(e) => {
                        setParams({...params, message: e.target.value})
                      }}
                    />
                  </FormGroup>
                  <FormGroup className="loadingContainer">
                    <Label for="imagem">Imagem</Label>
                    <Input type="file" name="imagem" id="imagem" value={params.imagem1 || ''}
                      onChange={(e) => {
                        setParams({...params, message: e.target.value})
                      }}
                    />
                  </FormGroup>
                  <FormGroup className="loadingContainer">
                    <Label for="imagem2">Imagem</Label>
                    <Input type="file" name="imagem2" id="imagem2" value={params.imagem2 || ''}
                      onChange={(e) => {
                        setParams({...params, message: e.target.value})
                      }}
                    />
                  </FormGroup>
                </Form>

                <Button className="actionButton" onClick={handleSubmit} aria-label="Botao enviar formulario avaliação">
                  Enviar
                </Button>
                <Button className="actionButton" onClick={limpar} aria-label="Botao limpar formulario avaliação">
                  Limpar
                </Button>
              </>
            )
          }
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
export default Index;