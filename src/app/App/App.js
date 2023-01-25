import React from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from '../../components/NavBar/NavBar'
import Home from '../../pages/Home/Home'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'


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
            <Home />
          </Col>
        </Row>
        <Row>
          <Col>
            <About />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;