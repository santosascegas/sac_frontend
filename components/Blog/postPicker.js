import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import {
  Card,
  CardGroup,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  CardImg
} from "reactstrap";

const turnDateReadable = (data) => {
  data = new Date().toISOString().slice(0, 19).replace('T', ' ');
  return data;
}

const PostPicker = ({ posts, setPost}) => (
      <>
        {
          posts.length > 0 ? (
            <>
              <Row className="dateRow">
              {
                posts.map( (post, key) => {
                  let data = turnDateReadable(post.created_at);
                  let imagem = ".\\"+post.image.path;
                  let teste = `http://localhost:8080/files/get/${post.image.id}`
                    return (
                      
                      <Col key={key} lg={3} sm={6} xs={12}>
                        <Container>
                        <CardGroup>
                          <Card>
                            <CardBody>
                              <CardTitle tag="h5">
                                {post.name}
                              </CardTitle>
                              <CardSubtitle className="mb-2 text-muted" tag="h6">
                                <em>
                                  {data};
                                </em>
                              </CardSubtitle>
                              <img src="">
                              </img>
                              <CardImg
                                src={teste}
                                top
                                width="100%"
                              />
                              <CardText>
                                {post.message}
                              </CardText>
                            </CardBody>
                          </Card>
                        </CardGroup>
                        </Container>
                      </Col>
                  )
                } )
              }
              </Row>
            </>
          ) :
          <h3>Nenhum post disponível.</h3>
        }
      </>
);
  
export default PostPicker;

