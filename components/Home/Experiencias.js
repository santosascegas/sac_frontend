import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Experiencias = () => {
  
  const Experiencias = [
    { 
      alt: "Projeto muito bem pensado e elaborado. Me senti muito bem, muito feliz, incluída. Com certeza é um passeio que quero repetir e irei divulgar.", 
      img: "./images/experiencias/experiencia1.jpg" 
    },
    { 
      alt:"O projeto é incrível. Principalmente porque foi concebido para pessoas com deficiência visual poderem unir um passeio seguro ao ar livre à ampliação de conhecimentos gerais, explorando tatilmente maquetes e miniaturas muito bem feitas.", 
      img : "./images/experiencias/experiencia2.jpg" 
    },
    { 
      alt:"Adorei a vivência, desde a pedalada até a explicação dos monumentos. Santos é um lugar cheio de histórias legais que nos faz voltar no tempo.", 
      img : "./images/experiencias/experiencia3.jpg" 
    },
    { 
      alt:"Amei a escala humana em todas as maquetes! A visão dos monumentos entendendo parte da cidade por meio do tato me comoveu muito!", 
      img : "./images/experiencias/experiencia4.jpg" 
    },
    { 
      alt:"O projeto é incrível e adorei realizar o passeio, conheci mais da história da nossa cidade", 
      img : "./images/experiencias/experiencia5.jpg" 
    },
    {
      alt:"Gostei do passeio porque aprendi história de pontos que eu não conhecia e pude ver a cidade de outra forma!", 
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