import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SimplyWeather() {
  return (
    <Container>
      <h1>Simply Weather</h1>
      <hr />
      <Row>
        <Col>
          <p>
            The IP address is retrieved from the user to find their current
            location. Then the weather API uses the zipcode to gather data on
            the current weather in that location. Users can search for weather
            in a different city by zipcode or city name. Finally, a 5 day
            forecast is offered showing a brief snapshot (temperature and
            conditions) of these days.
          </p>
          <p>Tech:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
