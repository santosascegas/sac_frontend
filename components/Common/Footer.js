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
          <p><FaRegCopyright /> Santos às Cegas. Todos os Direitos Reservados para Santos às Cegas.</p>
          <div>
            <a href="https://www.instagram.com/con_tacto3d/" target="_blank">
              <FaInstagram color="#fff" size={35}/>
            </a>
            <a href="https://wa.link/nzdtiv" target="_blank">
              <FaWhatsapp color="#fff" size={35}/>
            </a>
            <a href="mailto:santosascegas@gmail.com">
              <FaEnvelope color="#fff" size={35}/>
            </a>
          </div>
      </Container>
    </section>
   </div>
  );
}
export default Footer;