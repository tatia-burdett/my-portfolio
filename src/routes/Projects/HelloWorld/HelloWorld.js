import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HelloWorld() {
  return (
    <Container>
      <h1>Hello World</h1>
      <hr />
      <Row>
        <Col>
          <p>
            Hello World is a client-side React web app that allows users to view
            and post comments. This project utilizes a GET and POST endpoint
            only. A nickname, option location, category and some content are
            received from the user, and a date is created and formatted using
            react-moment.
          </p>
          <p>Tech:</p>
          <ul>
            <li>CSS</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
