import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { perguntasOpcionais, perguntasObrigatorias } from '../../helpers/PerguntasConsentimento'

const Consentimento = () => {
  
  const [respostasOpcionais, setRespostasOpcionais] = React.useState({})
  const [respostasObrigatorias, setRespostasObrigatorias] = React.useState({})

  const checkAtestado = () => {
   return Object.keys(respostasOpcionais).map((rKey) => {
     if (respostasOpcionais[rKey]) return false;

     return true;
   });
  }

  const checkObrigatorias = () => {
   return Object.keys(respostasObrigatorias).map((rKey) => {
     if (respostasObrigatorias[rKey]) return false;

     return true;
   });
  }
  
  const handleSubmit = () => {
    const precisaAtesteado = checkAtestado()
    const perguntasObrigados = checkObrigatorias();

    if (precisaAtesteado.includes(false)) console.log('precisa');
    if (perguntasObrigados.includes(false)) console.log('negado');
  }

  const renderPergunta = (pergunta, index) => (
    <>
      <p className="m-0" style={{ textAlign: "justify" }}><strong>{index}. {pergunta}</strong></p>
      <Form className="consentimento">
          <FormGroup tag="fieldset" className="d-flex mb-3 mt-2">
            <FormGroup check>
              <Label check>
              <Input type="radio" name="radio1" onChange={() => {
                setRespostasOpcionais({ ...respostasOpcionais, [index]: true })
              }}/>
                Sim
              </Label>
            </FormGroup>
            <FormGroup check style={{ marginLeft: '1.1rem' }}>
              <Label check>
                <Input type="radio" name="radio1" onChange={() => {
                setRespostasOpcionais({ ...respostasOpcionais, [index]: false })
              }}/>
                Não
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
    </>
  )

  const renderPerguntaObrigatoria = (pergunta, index) => (
    <>
      <p className="m-0" style={{ textAlign: "justify" }}><strong>{index}. {pergunta}</strong></p>
      <Form className="consentimento">
          <FormGroup tag="fieldset" className="d-flex mb-3 mt-2">
            <FormGroup check>
              <Label check>
              <Input type="radio" name="radio1" onChange={() => {
                setRespostasObrigatorias({ ...respostasObrigatorias, [index]: true })
              }}/>
                Sim, autorizo
              </Label>
            </FormGroup>
            <FormGroup check style={{ marginLeft: '1.1rem' }}>
              <Label check>
                <Input type="radio" name="radio1" onChange={() => {
                setRespostasObrigatorias({ ...respostasObrigatorias, [index]: false })
              }}/>
                Não, não autorizo
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
    </>
  )

  return (
      <>
        <h3>Consentimento de Participação</h3>

        <p className="my-4">
          Este documento faz parte da documentação do projeto “Santos às Cegas” e tem o objetivo de apontar e firmar os entendimentos e concordâncias relativas as condicionantes dos trajetos que ocorrerão na ciclovia da Orla de Santos.
          <br />
          <br />A CONCORDÂNCIA DIGITAL FIRMA A VERACIDADE DAS INFORMAÇÕES PRESTADAS POR MIM, VONTADE PRÓPRIA E CONSENTIMENTO DE ESTAR DE ACORDO COM AS INFORMAÇÕES PRESTADAS NO PROJETO.  
          <br />
          <br />Caso você tenha alguma resposta SIM no primeiro questionário (Prontidão para Atividade Física - 1 a 8) a sua participação estará condicionada a apresentação de um atestado médico no dia do seu trajeto. Nas três questões finais (9, 10 e 11), caso você responda "NÃO" está opção inviabiliza infelizmente sua participação.
          <br />
          <br />Tem dúvidas? Escreva para santosascegas@gmail.com
        </p>

        { perguntasOpcionais.map((po, index) => renderPergunta(po, index+1)) }
        { perguntasObrigatorias.map((po, index) => renderPerguntaObrigatoria(po, perguntasOpcionais.length+index+1)) }

        <Button onClick={handleSubmit}>
          Enviar
        </Button>
      </>
  );
}
export default Consentimento;