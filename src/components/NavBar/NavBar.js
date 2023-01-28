import React from "react";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar variant="dark">
      <Container>
        <Nav>
          <Navbar.Brand>
            <Link to="/">TB</Link>
          </Navbar.Brand>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link>
            <Link to="contact">Contact</Link>
          </Nav.Link>
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
