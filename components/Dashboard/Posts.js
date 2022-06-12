import React, { useEffect, useState } from 'react'

import { Table, Row, Col, Button, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { GrFormClose } from 'react-icons/gr'

const Post = ({posts, setPosts}) => {

    const [showModal, setShowModal] = useState(false);
    const [activePost, setActivePost] = useState(false);

    const BSModal = ({ post }) => (
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
                    {/**
                     * Aqui vai o formulario contendo os dados do post para o administrador alterar
                     */}
                </div>
            </div>
        </div>
      )

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
                        return (
                            <tr key={key}>
                                <td>{posts[key].name}</td>
                                <td>{posts[key].phone}</td>
                                <td>{posts[key].created_at}</td>
                                <td>{posts[key].isPublic ? 'Sim' : 'Não'}</td>
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
        { showModal ? <BSModal post={activePost} /> : null }
        </>
    )
}

export default Post