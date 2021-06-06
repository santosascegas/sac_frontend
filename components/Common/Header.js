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
import Link from 'next/link'

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
                <Link href="/">
                  <a className="nav-link">
                    Início
                  </a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/">
                  <a className="nav-link">
                    Quem Somos
                  </a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/agendamento">
                  <a className="nav-link">
                    Agendamento
                  </a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/trajeto">
                  <a className="nav-link">
                    Trajeto
                  </a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/faq">
                  <a className="nav-link">
                    Dúvidas Frequentes
                  </a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/agendamento">
                  <a className="nav-link">
                    Fale Conosco
                  </a>
                </Link>
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