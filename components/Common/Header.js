import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import AccessibilityMenu from './AccessibilityMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <>
    <AccessibilityMenu />
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img
              alt=""
        src="./images/logo-principal.png"
        width="120"
        height="100"
        className="d-inline-block align-top"
      />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Início</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#feature">Quem Somos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#service">Agendamento</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">Trajeto</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">Dúvidas Frequentes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">Fale Conosco</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
    </>
  );
}

export default Header;