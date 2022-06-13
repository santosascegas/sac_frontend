import React, { useState } from 'react'
import { Container, Row, Col, Button } from "reactstrap"
import { GoQuote } from 'react-icons/go'
import {
  Card,
  CardGroup,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  CardImg
} from "reactstrap"

import { convertDateToObject } from '../../helpers/convertDateToObject'

const PostPicker = ({ posts, setPost}) => (
  <>
  {
    posts.length > 0 ? (
      <>
      {
        posts.reverse().map( (post, key) => {
          let data = convertDateToObject(post.created_at)
          let image_url = `http://localhost:8080/files/get/${post.image.id}`
          let audio_url = `http://localhost:8080/files/get/${post.audio.id}`
          return (
              <Row key={key}>
                <CardGroup className='sac_cardgroup'>
                  <div className="quotes"><GoQuote size={24}/></div>
                  <Card className='post_card'>
                    <CardBody className='sac_cardbody'>
                      <CardTitle className='sac_cardtitle' tag="h5">
                        {post.name}
                      </CardTitle>
                      <CardSubtitle className="sac_cardsubtitle mb-2 text-muted" tag="h6">
                        Em {data.date}
                      </CardSubtitle>
                      {
                        (post.image.fileName !== null) ?
                          <CardImg
                            className='sac_cardimg'
                            src={image_url}
                            top
                            width="100%"
                          /> : null
                      }
                      <div>
                        <ul className='sac_questoes'>
                          <li>
                            <span className="sac_questao" aria-label='Você recomendaria o trajeto para outras pessoas?'>Você recomendaria o trajeto para outras pessoas?</span>
                            <span className="sac_questao_resposta" aria-label='Resposta: '>{(post.question_1) ? "Sim" : "Não"}</span>
                          </li>
                          <li>
                            <span className="sac_questao" aria-label='Questão 2?'>Questão 2?</span>
                            <span className="sac_questao_resposta" aria-label='Resposta: '>{(post.question_2) ? "Sim" : "Não"}</span>
                          </li>
                        </ul>
                      </div>
                      {
                        (post.audio.fileName !== null) ?
                          <audio src={audio_url} controls /> : null
                      }
                      {
                        (post.text !== null) ?
                          <CardText className='sac_cardtext'>
                            {post.message}
                          </CardText>
                        : null
                      }
                    </CardBody>
                  </Card>
                </CardGroup>
              </Row>
            )
          } )
        }
      </>
      ) :
      <h3>Nenhum post disponível.</h3>
  }
  </>
)
      
export default PostPicker
      
      