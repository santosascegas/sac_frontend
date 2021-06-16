import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="section position-relative" id="bannerInicio" role="banner">
      <Container>
        <Row className="align-items-center bannerRow">
          <Col lg={5} className="bannerAgendamentoImagem">
            <div className="mt-5 mt-lg-0">
              <img 
                src="/images/santos_as_cegas_banner_agendamento_trajeto_cultura_historia.jpg" 
                alt="Foto de capa: Dois homens estão sentados em 2 bancos de uma bicicleta dupla. A bicicleta é azul. Na frente da bicicleta há um cesto metálico preto com maquetes. Em segundo plano, há muretas brancas e no plano de fundo existem árvores e o mar." 
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
          <Col lg={7} className="bannerAgendamento">
            <Container className="px-5 pb-5 pt-4">
              <h3>Realize seu agendamento e venha fazer parte dessa experiência.</h3>
              <div className="insideBox">
                <h4>Terças-feiras às 14h30</h4>
                <h4>Quartas-feiras às 9h30</h4>
                <h4 className="mt-2">Demais dias e horários, favor entrar em contato pelo Fale Conosco.</h4>
              </div>

              <Link href="/agendamento">
                <a className="agendamentoButton">Marque seu trajeto ></a>
              </Link>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;