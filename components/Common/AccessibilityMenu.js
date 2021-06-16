import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const AccessibilityMenu = () => {

  return (
    <div className='sticky accessibilityMenu' role="complementary">
      <Container>
        <Row className="controlsRow">
          <Col xs={6} md={6} style={{ textAlign: 'center' }}>
            <button className="fontSizeButton" id="decreaseFont" 
              aria-label="Diminuir a fonte">A-</button>
            <button className="fontSizeButton ml-4" id="increaseFont"
              aria-label="Aumentar a fonte">A+</button>
          </Col>
          <Col xs={6} md={6} className="contrastOptions">
            <p>Contraste </p>
            <button className="colorOption" id="light" 
              style={{ 
                border: '2px solid #0B0700',
                backgroundColor: '#EAEEF3'
              }}
              role="none"
              title="light theme"
              aria-label="Tema Claro"
            ></button>
            <button className="colorOption" id="black"
              style={{ 
                border: '2px solid #EAEEF3',
                backgroundColor: '#0B0700'
              }}
              role="none"
              title="dark theme"
              aria-label="Tema Escuro"
            ></button>
            <button className="colorOption" id="contrast"
              style={{ 
                border: '2px solid #FFFF00',
                backgroundColor: '#002673'
              }}
              role="none"
              title="contrast theme"
              aria-label="Tema Contraste"
            ></button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AccessibilityMenu;