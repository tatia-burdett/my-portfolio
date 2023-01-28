import React from "react";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from 'react-router-bootstrap'

export default function NavBar() {
  return (
    <Navbar variant="dark">
      <Container>
        <Nav>
          <LinkContainer to='/'>
            <Navbar.Brand>
              TB
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='about'>
            <Nav.Link>
              About
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to='contact'>
            <Nav.Link>
              Contact
            </Nav.Link>
          </LinkContainer>
          <NavDropdown title="Projects">
            <NavDropdown.Item>LodgeLog</NavDropdown.Item>
            <NavDropdown.Item>Hello World</NavDropdown.Item>
            <NavDropdown.Item>Simply Weather</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link
            href="https://drive.google.com/file/d/12htD1p2ffJE8gloOOUmB2gLbwQ1B3wvP/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
