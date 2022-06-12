import React from 'react'
import axios from 'axios'
import { Container, Row, Col } from "reactstrap"

import { GoQuote } from 'react-icons/go'

const Experiencias = ( { posts } ) => {
  return (
    (posts.length > 0) ?
    <section className="section" id="service" role="complementary">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h2 className="font-weight-bold text-dark">Relato de experiências</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="experiencias_container">
        {
          posts.map((post, key) => {
              let imagem = `http://localhost:8080/files/get/${post.image.id}`
              return (
                <div className="experiencia_card">
                  <div className="red_border">
                    <div className="quotes_mark">
                      <GoQuote size={24} />
                    </div>
                    <div className="logo">
                      <img src="./images/logo-principal.png" alt="Logo do Santos às Cegas"/>
                    </div>
                    <div className="content">

                    </div>
                  </div>
                </div>
              )
            }
          )
        }
      </div>
    </section>
    : <></>
  )
}

export default Experiencias