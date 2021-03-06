import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { perguntasOpcionais, perguntasObrigatorias } from '../../helpers/PerguntasConsentimento';

import axios from 'axios';

const Consentimento = ({ data, userInfo, setError, setSuccess, setLoading }) => {
  
  const [respostasOpcionais, setRespostasOpcionais] = React.useState({})
  const [respostasObrigatorias, setRespostasObrigatorias] = React.useState({})

  const checkAtestado = () => {
   const opcionais =  Object.keys(respostasOpcionais).map((rKey) => {
     if (respostasOpcionais[rKey]) return false;

     return true;
   });

   let k = 0;
   for (let i = 0; i < opcionais.length ; i++) {
     if (!opcionais[i]) k++;
   }

   return k;
  }

  const checkObrigatorias = () => {
   return Object.keys(respostasObrigatorias).map((rKey) => {
     if (respostasObrigatorias[rKey]) return false;

     return true;
   });
  }
  
  const handleSubmit = async () => {
    setLoading(true)
    const precisaAtesteado = checkAtestado()

    const dados = {
      name: userInfo.nome,
      email: userInfo.email,
      idDocument: userInfo.documento,
      phone: userInfo.telefone,
      agenda: { ...data },
      doctorsNote: precisaAtesteado >= 1 ? 1 : 0
    }

    try {
      await axios.post('http://localhost:8080/agendamento/', dados);
      console.log(dados)
      setSuccess(true);
      setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
    }
  }

  const checkPerguntasObrigatorias = checkObrigatorias();

  const renderPergunta = (pergunta, index) => (
    <>
      <p className="m-0 perguntaConsentimento" style={{ textAlign: "justify" }}><strong>{index}. {pergunta}</strong></p>
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
                N??o
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
    </>
  )

  const renderPerguntaObrigatoria = (pergunta, index) => (
    <>
      <p className="m-0 perguntaConsentimento" style={{ textAlign: "justify" }}><strong>{index}. {pergunta.pergunta}</strong></p>
      <Form className="consentimento">
          <FormGroup tag="fieldset" className="d-flex mb-3 mt-2">
            <FormGroup check>
              <Label check>
              <Input type="radio" name="radio1" onChange={() => {
                setRespostasObrigatorias({ ...respostasObrigatorias, [index]: true })
              }}/>
                {pergunta.respPositiva}
              </Label>
            </FormGroup>
            <FormGroup check style={{ marginLeft: '1.1rem' }}>
              <Label check>
                <Input type="radio" name="radio1" onChange={() => {
                setRespostasObrigatorias({ ...respostasObrigatorias, [index]: false })
              }}/>
                {pergunta.respNegativa}
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
    </>
  )

  return (
      <>
        <h4>Consentimento de Participa????o</h4>

        <p className="my-4" style={{ textAlign:"justify" }}>
          Este documento faz parte da documenta????o do projeto ???Santos ??s Cegas??? e tem o objetivo de apontar e firmar os entendimentos e concord??ncias relativas as condicionantes dos trajetos que ocorrer??o na ciclovia da Orla de Santos.
          <br />
          <br />A CONCORD??NCIA DIGITAL FIRMA A VERACIDADE DAS INFORMA????ES PRESTADAS POR MIM, VONTADE PR??PRIA E CONSENTIMENTO DE ESTAR DE ACORDO COM AS INFORMA????ES PRESTADAS NO PROJETO.  
          <br />
          <br />Caso voc?? tenha alguma resposta SIM no primeiro question??rio (Prontid??o para Atividade F??sica - 1 a 8) a sua participa????o estar?? condicionada a apresenta????o de um atestado m??dico no dia do seu trajeto. Nas tr??s quest??es finais (9, 10 e 11), caso voc?? responda "N??O" est?? op????o inviabiliza infelizmente sua participa????o.
          <br />
          <br />Tem d??vidas? Escreva para santosascegas@gmail.com
        </p>

        <p>O sinal de <span style={{ color: 'red' }}>*</span> indica que o preenchimento do campo ?? obrigat??rio</p>

        { perguntasOpcionais.map((po, index) => renderPergunta(po, index+1)) }
        { perguntasObrigatorias.map((po, index) => renderPerguntaObrigatoria(po, perguntasOpcionais.length+index+1)) }

        <Button 
          onClick={handleSubmit} 
          disabled={(Object.keys(respostasOpcionais).length != perguntasOpcionais.length) 
            || (Object.keys(respostasObrigatorias).length != perguntasObrigatorias.length) || checkPerguntasObrigatorias.includes(true)} 
          className="actionButton"
          style={{ marginTop: '2rem' }}
          title="Botao enviar consentimento"
          aria-label="Botao para enviar formulario de consentimento"
        >
          Enviar
        </Button>
      </>
  );
}
export default Consentimento;