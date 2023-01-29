import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LodgeLog() {
  return (
    <Container>
      <h1>LodgeLog</h1>
      <hr />
      <Row>
        <Col>
          <p>
            LodgeLog is a webapp created using the LodgeLog-API I build. LodgeLog allows users to create an account and
            log in to view a timeline of their personal address history. Users
            can POST new addresses, and PATCH the to_date of each address to
            update their current address. All addresses are sorted to be viewed
            in chronological order, with the most recent address at the top.
            React Vertical Timeline package was used to help style and create
            the timeline effect.
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
