import React from 'react'
import axios from 'axios'
import { Container, Row, Col } from "reactstrap"

import { GoQuote } from 'react-icons/go'

const Experiencias = ( { posts } ) => {

  const reduceName = (text) => {
    const text_arr = text.split(" ")
    let output_text = []
    let char_count = 3
    text_arr.forEach(e => {
      if (char_count + e.length === 25) {
        char_count = 25
        output_text.push(e[0] + ".")
      }
      if (char_count + e.length <= 25) {
        char_count += e.length
        output_text.push(e)
      }
    })
    return output_text.join(' ')
  }

  const reduceText = (text) => {
    const text_arr = text.split(" ")
    let output_text = []
    let char_count = 0
    text_arr.forEach(e => {
      if (char_count + e.length + 1 <= 152) {
        char_count += e.length + 1
        output_text.push(e)
        output_text.push(" ")
      }
    })

    if (char_count === 152) {
      output_text.push("...")
    }
    
    return output_text.join('')
  }

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
              let post_url = `http://localhost:3005/blog#${post.id}`
              return (
                <a className='experiencias_link' href={post_url}>
                  <div className="experiencia_card">
                    <div className="red_border">
                      <div className="quotes_mark">
                        <GoQuote size={24} />
                      </div>
                      <div className="logo">
                        <img src="./images/logo-principal.png" alt="Logo do Santos às Cegas"/>
                      </div>
                      <div className="content">
                        <span>{reduceText(post.message)}</span>
                        <span className="experiencia_name">— {reduceName(post.name)}</span>
                      </div>
                    </div>
                  </div>
                </a>
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