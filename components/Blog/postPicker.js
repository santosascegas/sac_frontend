import React from 'react'
import { Container, Row, Col, Button } from "reactstrap"
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
        posts.map( (post, key) => {
          let data = convertDateToObject(post.created_at)
          let imagem = `http://localhost:8080/files/get/${post.image.id}`
          return (
              <Row>
                <CardGroup>
                  <Card className='post_card'>
                    <CardBody>
                      <CardTitle tag="h5">
                        {post.name}
                      </CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        <em> Postado em:</em> {data.date}
                      </CardSubtitle>
                      <img src="">
                      </img>
                      <CardImg
                        src={imagem}
                        top
                        width="100%"
                      />
                      <CardText>
                        {post.message}
                      </CardText>
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
      
      