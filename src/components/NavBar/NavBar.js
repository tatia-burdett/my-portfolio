import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {
  return (
    <Navbar variant="dark">
      <Container>
        <Nav>
          <Navbar.Brand href='#fullscreen'>TB</Navbar.Brand>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#skills'>Skills</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
          <NavDropdown title="Projects">
            <NavDropdown.Item>LodgeLog</NavDropdown.Item>
            <NavDropdown.Item>Hello World</NavDropdown.Item>
            <NavDropdown.Item>Simply Weather</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#projects'>Projects</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href='https://drive.google.com/file/d/12htD1p2ffJE8gloOOUmB2gLbwQ1B3wvP/view?usp=sharing' target='_blank'>Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}