import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { FaInstagram, FaWhatsapp, FaEnvelope} from 'react-icons/fa';

import FooterHeader from './FooterHeader';

const Footer = ({inicio}) => {
  
  return (
   <>
    <FooterHeader inicio={inicio} />
    <section className="footer section">
      <Container>
        <Row className="footerRow">
        <Col lg={4}>
            <h4>Parceiros</h4>
          </Col>
          <Col lg={4}>
            <h4>Redes Sociais</h4>
            <a href="#">
              <FaInstagram color="#fff" size={35}/>
            </a>
            <a href="#">
              <FaWhatsapp color="#fff" size={35}/>
            </a>
            <a href="#">
              <FaEnvelope color="#fff" size={35}/>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
   </>
  );
}
export default Footer;