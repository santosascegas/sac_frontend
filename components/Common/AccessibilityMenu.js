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
    <div className='sticky accessibilityMenu'>
      <Container>
        <Row className="controlsRow">
          <Col lg={6} style={{ textAlign: 'center' }}>
            <button className="fontSizeButton" id="decreaseFont">A-</button>
            <button className="fontSizeButton ml-4" id="increaseFont">A+</button>
          </Col>
          <Col lg={6} className="contrastOptions">
            <p>Contraste: </p>
            <button className="colorOption" id="light" 
              style={{ 
                border: '2px solid #0B0700',
                backgroundColor: '#EAEEF3'
              }}
            ></button>
            <button className="colorOption" id="black"
              style={{ 
                border: '2px solid #EAEEF3',
                backgroundColor: '#0B0700'
              }}
            ></button>
            <button className="colorOption" id="contrast"
              style={{ 
                border: '2px solid #FFFF00',
                backgroundColor: '#002673'
              }}
            ></button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AccessibilityMenu;