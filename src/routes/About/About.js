import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from '../../images/profile1.jpeg'
import Image from 'react-bootstrap/Image'

function About() {
  return (
    <Container>
      <h1>Learn About Me</h1>
      <Row>
        <Col>
          Well rounded experience transitioning from a successful humanities
          profession in nursing to software engineering. Working in healthcare
          for half of a decade taught me the importance of paying attention to
          detail and helped to develop an agile mentality of solutioning in a
          scalable and repeatable manner. After deciding to pursue my software
          engineering career full-time, I have taken my “lessons-learned” from
          my previous experience and applied my critical thinking prowess into
          positively impacting what I saw firsthand as an area needing
          improvement in an important industry. As I’ve continued expanding my
          expertise while leveraging my previous experience, I have found my
          current passion aligning with software engineering holistically and am
          dedicating myself to growing in that expertise specifically.
        </Col>
        <Col sm={4}>
          <Image src={img} fluid rounded={true}/>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
