import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import llImg from '../../images/ll-landing-page.png'
import hwImg from '../../images/hw-landingheader.png'
import cwImg from '../../images/current-weather.png'
import { LinkContainer } from "react-router-bootstrap";

export default function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
      <hr />
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={llImg} />
            <Card.Body>
              <Card.Title>LodgeLog</Card.Title>
              <Card.Text>Web app where users can log in and save their personal address history.</Card.Text>
              <LinkContainer to='lodgelog'>
                <Button>View</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={hwImg} />
            <Card.Body>
              <Card.Title>Hello World</Card.Title>
              <Card.Text>Anonymous social sharing web app where users post/view comments.</Card.Text>
              <LinkContainer to='helloworld'>
                <Button>View</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cwImg} />
            <Card.Body>
              <Card.Title>Simply Weather</Card.Title>
              <Card.Text>Weather web app that displays the current and five-day forecast</Card.Text>
              <LinkContainer to='simplyweather'>
                <Button>View</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}