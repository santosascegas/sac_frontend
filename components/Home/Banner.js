import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="section position-relative" id="bannerInicio">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="bannerAgendamentoImagem">
            <div className="mt-5 mt-lg-0">
              <img 
                src="/images/santos_as_cegas_banner_agendamento_trajeto_cultura_historia.jpg" 
                alt="" 
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
          <Col lg={7} className="h-100 bannerAgendamento">
            <Container className="px-5 pb-5 pt-4">
              <h2>Realize seu agendamento e venha fazer parte dessa experiência.</h2>
              <div className="insideBox">
                <h3>Agendamentos</h3>
                <h4>Terças-feiras às 14h30</h4>
                <h4>Quartas-feiras às 9h30</h4>
                <h4 className="mt-2">Demais dias e horários, favor entrar em contato pelo Fale Conosco.</h4>
              </div>

              <Link href="/agendamento">
                <a className="agendamentoButton">Agende seu trajeto</a>
              </Link>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;