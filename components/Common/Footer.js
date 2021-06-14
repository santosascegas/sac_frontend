import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaRegCopyright } from 'react-icons/fa';

import FooterHeader from './FooterHeader';

const Footer = ({inicio}) => {
  
  return (
   <div className="footerDiv">
    <FooterHeader inicio={inicio} />
    <section className="footer section">
      <Container className="footerContainer">
          <p><FaRegCopyright /> Santos às Cegas. Todos os Direitos Reservados</p>
          <div>
            <a href="#">
              <FaInstagram color="#fff" size={35}/>
            </a>
            <a href="#">
              <FaWhatsapp color="#fff" size={35}/>
            </a>
            <a href="#">
              <FaEnvelope color="#fff" size={35}/>
            </a>
          </div>
      </Container>
    </section>
   </div>
  );
}
export default Footer;