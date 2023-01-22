import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Navbar.Brand>TB</Navbar.Brand>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Skills</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
          <NavDropdown title="Projects">
            <NavDropdown.Item>Test 1</NavDropdown.Item>
            <NavDropdown.Item>Test 2</NavDropdown.Item>
            <NavDropdown.Item>Test 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link>Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

// export default function NavBar() {
//   return (
//     <div className='navbar'>
//       <a href='#fullscreen' className='logo'>{'<TB/>'}</a>
//       <ul className='navbar-links'>
//         <li><a href='#about'>About</a></li>
//         <li><a href='#skills'>Skills</a></li>
//         <li><a href='#projects'>Projects</a></li>
//         <li><a href='#contact'>Contact</a></li>
//       </ul>
//     </div>
//   )
// }