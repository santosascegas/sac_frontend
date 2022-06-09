import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";

const PostPicker = ({ posts, setPosts}) => (
      <>
        {
          posts.length > 0 ? (
            <>
              <Row className="dateRow">
              {
                posts.map( (post, key) => {
                    console.log(post)
                    return (
                    <Col key={key} lg={3} sm={6} xs={12}>
                      <Button>
                      </Button>
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

