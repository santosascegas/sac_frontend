import React from 'react'

import Layout from "../components/Common/Layout"

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
} from "reactstrap"

import InputMask from 'react-input-mask'
import axios from 'axios'

import dynamic from 'next/dynamic'
import { useState } from 'react'

const RecordMic = dynamic(
  () => {
    return import('../components/Blog/recordMic')
  },
  { ssr: false }
)

const Index = () => {
  const [params, setParams] = React.useState({})

  const [error, setError] = React.useState(null)
  const [success, setSuccess] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [audioData, setAudioData] = useState(null)

  const handleSubmit = async () => {
    setLoading(true)

    const regexTelefone = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$')

    if (regexTelefone.test(params.phone)) {
      setError('Número de telefone inválido. Por favor, preencha com dados válidos')
      return
    }

    if (!params.message) {
      setError('Uma mensagem de avaliação é necessária!')
      return
    }

    setError(null)
    
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const formData = new FormData()

    if (audioData) {
      let file = new File([audioData.blob], 'wav')
      formData.append('audio', file)
    } else {
      let empty = new File([""], "empty", { type: 'text/html' })

      formData.append('audio', empty)
    }

    if (params.image) {
      formData.append('image', params.image)
    } else {
      let empty = new File([""], "empty", { type: 'text/html' })

      formData.append('image', empty)
    }

    formData.append('name', params.name)
    formData.append('phone', params.phone)
    formData.append('message', params.message)
    formData.append('question_1', params.question_1)
    formData.append('question_2', params.question_2)
    
    await axios.post('http://localhost:8080/post/', formData, config)
    setSuccess('Avaliação enviada com sucesso!')
    limpar()
    setLoading(false)

  }

  const limpar = () => {
    setParams({})
  }
 
  return (
    <>
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

                <Form className="userForm" encType='multipart/form-data'>
                  <FormGroup className="required" style={ {marginBottom: "10px"} }>
                    <Label for="name">Nome</Label>
                    <Input type="text" name="name" id="name" value={params.name || ''}
                      onChange={(e) => {
                        setParams({...params, name: e.target.value})
                      }}
                    />
                  </FormGroup>

                  <FormGroup className="required" style={ {marginBottom: "10px"} }>
                    <Label for="phone">Telefone</Label>
                    <InputMask mask="(99) 99999-9999" value={params.phone || ''}
                      onChange={(e) => {
                        setParams({...params, phone: e.target.value})
                      }}
                    >
                      {(inputProps) => <Input {...inputProps} name="phone" id="telefone" />}
                    </InputMask>
                  </FormGroup>

                  <FormGroup className="required" style={ {marginBottom: "10px"} }>
                    <Label for="question_1" style={ {marginRight: "10px"} }>Você recomendaria o trajeto para outras pessoas?</Label>
                    <Input type="radio" name="question_1" id="question_1" value={1} 
                      onChange={(e) => {
                        setParams({...params, question_1: e.target.value})
                      }}
                    /><span style={ {marginRight: "10px"} }>Sim</span>
                    <Input type="radio" name="question_1" id="question_1" value={0} 
                      onChange={(e) => {
                        setParams({...params, question_1: e.target.value})
                      }}
                    /><span>Não</span>
                  </FormGroup>
                  <FormGroup className="required" style={ {marginBottom: "10px"} }>
                    <Label for="question_2" style={ {marginRight: "10px"} }>Pergunta 2</Label>
                    <Input type="radio" name="question_2" id="question_2" value={1} 
                      onChange={(e) => {
                        setParams({...params, question_2: e.target.value})
                      }}
                    /><span style={ {marginRight: "10px"} }>Sim</span>
                    <Input type="radio" name="question_2" id="question_2" value={0} 
                      onChange={(e) => {
                        setParams({...params, question_2: e.target.value})
                      }}
                    /><span>Não</span>
                  </FormGroup>
                  <FormGroup className="required" style={ {marginBottom: "10px"} }>
                    <Label for="message">Mensagem</Label>
                    <Input type="textarea" name="message" id="message" value={params.message || ''}
                      onChange={(e) => {
                        setParams({...params, message: e.target.value})
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={ {marginBottom: "10px"} }>
                    <Label for="image">Imagem</Label>
                    <Input type="file" name="image" id="image"
                      onChange={(e) => {
                        setParams({...params, image: e.target.files[0]})
                        console.log(params.image)
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={ {marginBottom: "10px"} }>
                    <RecordMic audio={audioData} setAudio={setAudioData} />
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
    </>
  )
}
export default Index