import React from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from '../NavBar/NavBar'
import FullScreen from '../FullScreen/FullScreen'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'


function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <FullScreen />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;