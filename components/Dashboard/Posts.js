import React, { useState } from 'react'

import { Table, Button, FormGroup } from "reactstrap"
import { GrFormClose } from 'react-icons/gr'

import {
    Form,
    Label,
    Input
  } from "reactstrap"
import InputMask from 'react-input-mask'
import Cookies from 'universal-cookie'
import { RefreshToken } from '../../helpers/refreshToken'
import axios from 'axios'
import { convertDateToObject } from '../../helpers/convertDateToObject'

const Post = ({posts, setPosts}) => {
    let token
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('refresh_token')
    }
    const [params, setParams] = React.useState({})

    const [showModal, setShowModal] = useState(false)
    const [activePost, setActivePost] = useState(false)
    const cookies = new Cookies()

    const BSModal = ({ post, setPosts, setShowModal }) => {
        const [bsparams, setBsparams] = useState({
            id: post.id,
            name: post.name,
            phone: post.phone,
            question_1: post.question_1,
            question_2: post.question_2,
            image: post.image,
            audio: post.audio,
            message: post.message,
            isPublic: post.isPublic
        })

        const handleSubmit = async (request_data, e) => {
            e.preventDefault()

            const config = await RefreshToken(token)

            const obj = request_data

            if (obj.question_1 == 1) {
                obj.question_1 = "true"
            } else {
                obj.question_1 = "false"
            }

            if (obj.question_2 == 1) {
                obj.question_2 = "true"
            } else {
                obj.question_2 = "false"
            }

            if (obj.isPublic == 1) {
                obj.isPublic = "true"
            } else {
                obj.isPublic = "false"
            }

            await axios.put(`${process.env.URL_BACKEND}/post/${bsparams.id}`, bsparams, config)

            await axios.get(`${process.env.URL_BACKEND}/post/todos`, config).then( (response) => {
                setPosts(response.data)
            } )

            setShowModal(false)
        }

        let image_url = `${process.env.URL_BACKEND}/files/get/${post.image.id}`
        let audio_url = `${process.env.URL_BACKEND}/files/get/${post.audio.id}`

        return (
            <div className="container-modal">
            <div id="productModal" className="active sacmodal">
                <div className="modal-header">
                    <span className="label">
                        Editar Postagem
                    </span>
                    <div className="close">
                        <button className='close-btn' onClick={ () => setShowModal(false) }>
                            <GrFormClose size={24} />
                        </button>
                    </div>
                </div>
                <div className="content">
                    <Form className="userForm" encType='multipart/form-data'>
                  <FormGroup className="required" style={ {marginBottom: "10px"} }>
                    <Label for="name">Nome</Label>
                    <Input type="text" name="name" id="name" value={bsparams.name}
                      onChange={(e) => {
                        setBsparams({...bsparams, name: e.target.value})
                      }}
                    />
                  </FormGroup>

                  <FormGroup className="required" style={ {marginBottom: "10px"} }>
                    <Label for="phone">Telefone</Label>
                    <InputMask mask="(99) 99999-9999" value={bsparams.phone}
                      onChange={(e) => {
                        setBsparams({...bsparams, phone: e.target.value})
                      }}
                    >
                      {(inputProps) => <Input {...inputProps} name="phone" id="telefone" />}
                    </InputMask>
                  </FormGroup>

                  <FormGroup className="required" style={ {marginBottom: "10px"} }>
                    <Label for="question_1" style={ {marginRight: "10px"} }>Você recomendaria o trajeto para outras pessoas?</Label>
                    <Input type="radio" name="question_1" id="question_1" value={1} checked={(bsparams.question_1 == 1) ? 1 : 0}
                      onChange={(e) => {
                        setBsparams({...bsparams, question_1: e.target.value})
                      }}
                    /><span style={ {marginRight: "10px"} }>Sim</span>
                    <Input type="radio" name="question_1" id="question_1" checked={(bsparams.question_1 == 0) ? 1 : 0} value={0} 
                      onChange={(e) => {
                        setBsparams({...bsparams, question_1: e.target.value})
                      }}
                    /><span>Não</span>
                  </FormGroup>
                  <FormGroup className="required" style={ {marginBottom: "10px"} }>
                    <Label for="question_2" style={ {marginRight: "10px"} }>Você desejaria realizar o passeio novamente?</Label>
                    <Input type="radio" name="question_2" id="question_2" checked={(bsparams.question_2 == 1) ? 1 : 0} value={1} 
                      onChange={(e) => {
                        setBsparams({...bsparams, question_2: e.target.value})
                      }}
                    /><span style={ {marginRight: "10px"} }>Sim</span>
                    <Input type="radio" name="question_2" id="question_2" checked={(bsparams.question_2 == 0) ? 1 : 0} value={0} 
                      onChange={(e) => {
                        setBsparams({...bsparams, question_2: e.target.value})
                      }}
                    /><span>Não</span>
                  </FormGroup>
                  <FormGroup className="required" style={ {marginBottom: "10px"} }>
                    <Label for="message">Mensagem</Label>
                    <Input type="textarea" name="message" id="message" value={bsparams.message}
                      onChange={(e) => {
                        setBsparams({...bsparams, message: e.target.value})
                      }}
                    />
                  </FormGroup>
                  <FormGroup style={ {marginBottom: "10px"} }>
                    <Label style={{display: "block"}} for="audio">Audio</Label>
                    {
                        (post.image.fileName !== null) ?
                          <audio
                            src={audio_url} controls
                          /> : "Não há audio neste post"
                      }
                    
                  </FormGroup>
                  <FormGroup style={ {marginBottom: "10px"} }>
                    <Label style={{display: "block"}} for="image">Foto</Label>
                    {
                        (post.image.fileName !== null) ?
                          <img
                            src={image_url}
                          /> : "Não há foto neste post"
                      }
                  </FormGroup>

                  <FormGroup className="required" style={ {marginBottom: "10px"} }>
                    <Label for="isPublic" style={ {marginRight: "10px"} }><b>Deixar este post publico?</b></Label>
                    <Input type="radio" name="isPublic" id="isPublic" value={1} checked={(bsparams.isPublic == 1) ? 1 : 0}
                      onChange={(e) => {
                        setBsparams({...bsparams, isPublic: e.target.value})
                      }}
                    /><span style={ {marginRight: "10px"} }>Sim</span>
                    <Input type="radio" name="isPublic" id="isPublic" checked={(bsparams.isPublic == 0) ? 1 : 0} value={0} 
                      onChange={(e) => {
                        setBsparams({...bsparams, isPublic: e.target.value})
                      }}
                    /><span>Não</span>
                  </FormGroup>

                  <Button className="actionButton sacbtn" onClick={(e) => handleSubmit(bsparams, e)} aria-label="Enviar formulário de avaliação">
                    Alterar
                  </Button>
                </Form>
                </div>
            </div>
        </div>
        )
    }

    if (posts.length > 0) {
        return (
            <>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Criado em</th>
                        <th>Visibilidade</th>
                        <th>Questão 1</th>
                        <th>Questão 2</th>
                        <th>Alterar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(posts).map( (_, key) => {
                            let date = convertDateToObject(posts[key].created_at)
                            return (
                                <tr key={key}>
                                    <td>{posts[key].name}</td>
                                    <td>{posts[key].phone}</td>
                                    <td>{date.date} às {date.time}</td>
                                    <td>{posts[key].isPublic ? <span style={{color: "green"}}>Público</span> : <span style={{color: "red"}}>Privado</span>}</td>
                                    <td>{posts[key].question_1 ? 'Sim' : 'Não'}</td>
                                    <td>{posts[key].question_2 ? 'Sim' : 'Não'}</td>
                                    <td>
                                        <Button onClick={ () => {
                                            setActivePost(posts[key]),
                                            setShowModal(true)
                                        } }>Alterar</Button>
                                    </td>
                                </tr>
                            )
                        } )
                    }
                </tbody>
            </Table>
            { showModal ? <BSModal post={activePost} setPosts={setPosts} setShowModal={setShowModal} /> : null }
            </>
        )
    }else {
        return (<><span>Não há postagens</span></>)
    }
}

export default Post