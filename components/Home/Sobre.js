import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const Sobre = () => {
  const janelas = [
    {
      id: 1,
      img: "./images/Muretas3.jpg",
      title: "Dúvidas Frequentes",
      desc: "Página dedicada para informar e retirar dúvidas sobre o projeto Santos às Cegas."
    },
    {
      id: 2,
      img: "./images/TomieOhtake.jpg",
      title: "Trajeto",
      desc: ""
    },
    {
      id: 4,
      img: "./images/Atlantico.jpg",
      title: "Fale Conosco",
      desc: ""
    },
  ];

  const RenderJanelas = () => janelas.map((janela, key) => (

    <Col key={key} lg={4}>
      <Card style={{ width: '18rem', height: '70vh', border: '2px solid #cc4137' }}>
        <div style={{ padding: '20px' }}>
          <CardImg style={{ height: '30vh', objectFit: 'cover' }} variant="top" src={janela.img} />
        </div>
        <CardBody style={{ padding: '20px' }}>
          <CardTitle style={{ textAlign: 'center', fontWeight: 700, fontSize: '21px' }}>{janela.title}</CardTitle>
          <CardText style={{ fontSize: '16px' }}>
            {janela.desc}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  )
  );

  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={8}>
            <div className="title text-center mb-5">
              <h3 style={{ fontSize: '38px', paddingBottom: '20px' }} >O que é <span style={{ color: '#B6000B' }}>Santos às Cegas</span></h3>
              <p style={{ fontSize: '21px', color: '#262626', textAlign: 'justify' }}>
                O projeto, com parceria com a Coordenadoria de Defesa de Políticas para Pessoas com Deficiência, da cidade de Santos/SP, propõe a realização de trajetos com bicicleta triciclo tandem (dupla) pela ciclovia da orla da praia, com paradas culturais e sensoriais em monumentos e locais públicos. O projeto atinge pessoas com deficiência visual e outras interessadas nos temas relacionados à inclusão, educação e patrimônio cultural.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {RenderJanelas()}
        </Row>
      </Container>


    </section>
  );
}
export default Sobre;