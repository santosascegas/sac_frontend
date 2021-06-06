import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Experiencias = () => {
  
  const Experiencias = [
    { 
      alt: "Descricao da Imagem", 
      img: "./images/experiencias/experiencia1.jpg" 
    },
    { 
      alt:"Descricao da Imagem", 
      img : "./images/experiencias/experiencia2.jpg" 
    },
    { 
      alt:"Descricao da Imagem", 
      img : "./images/experiencias/experiencia3.jpg" 
    },
    { 
      alt:"Descricao da Imagem", 
      img : "./images/experiencias/experiencia4.jpg" 
    },
    { 
      alt:"Descricao da Imagem", 
      img : "./images/experiencias/experiencia5.jpg" 
    },
    {
      alt:"Descricao da Imagem", 
      img : "./images/experiencias/experiencia6.jpg" 
    },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h2 className="font-weight-bold text-dark">Relato de experiências</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {
            Experiencias.map((experiencia, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <img 
                    src={experiencia.img}
                    alt={experiencia.alt}
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Experiencias;