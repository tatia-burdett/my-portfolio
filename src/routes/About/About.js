import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../images/profile1.jpeg";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";

function About() {
  return (
    <Container>
      <h1>Learn About Me</h1>
      <hr />
      <Row>
        <Col>
          <Row>
            <h2>Tatia Burdett</h2>
            <h3>
              Greater Chicago Area • (303) 229-2071 • tatiaburdett@gmail.com
            </h3>
            <h4>Professional Summary</h4>
            <p>
              Well rounded experience transitioning from a successful humanities
              profession in nursing to software engineering. Working in
              healthcare for half of a decade taught me the importance of paying
              attention to detail and helped to develop an agile mentality of
              solutioning in a scalable and repeatable manner. After deciding to
              pursue my software engineering career full-time, I have taken my
              “lessons-learned” from my previous experience and applied my
              critical thinking prowess into positively impacting what I saw
              firsthand as an area needing improvement in an important industry.
              As I’ve continued expanding my expertise while leveraging my
              previous experience, I have found my current passion aligning with
              software engineering holistically and am dedicating myself to
              growing in that expertise specifically.
            </p>
          </Row>
        </Col>
        <Col sm={4}>
          <Image src={img} fluid rounded={true} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Experience</h4>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Force Therapeutics • Support Engineer
              </Accordion.Header>
              <Accordion.Body>
                <h5>Support Engineer – July 2021-Present</h5>
                <ul>
                  <li>
                    Collaborated with Engineering, Product, and QA directly to
                    bridge gaps between client issues and properly prioritize
                    tickets to ensure business-value was prioritized
                  </li>
                  <li>
                    Fast-tracked critical issues that could be resolved directly
                    within Support Engineering to more efficiently address and
                    deploy fixes while still ensuring adequate testing coverage
                    and following CI/CD best-practices
                  </li>
                  <li>
                    Maintained our existing software codebase and ensured
                    compliance with evolving software standards for legal and
                    security purposes
                  </li>
                  <li>
                    Prioritized new feature, enhancement, and bug-fix requests
                    from clients while balancing against internal company
                    roadmaps and initiatives
                  </li>
                  <li>
                    Standardized workflows in Jira for bugs and defects to gain
                    internal efficiencies
                  </li>
                  <li>
                    Introduced a “Zero Bug Policy” which substantially decreased
                    the number of post-release tickets to be addressed and
                    significantly reduced the number of customer complaints
                  </li>
                  <li>
                    Created a unified repository knowledge-base that is now
                    leveraged for both internal onboarding as well as externally
                    to existing and prospective clients
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Thinkful • Full Stack Developer Student
              </Accordion.Header>
              <Accordion.Body>
                <h5>Full Stack Web Development – Nov 2020-2021</h5>
                <p>Full stack developer bootcamp, focused on JavaScript, React, Node, Express, and PostgreSQL.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                LPN • Nursing Experience
              </Accordion.Header>
              <Accordion.Body>
                <h5>December 2012 - Nov 2020</h5>
                <ul>
                  <li>Overlake Medical Center – Seattle, WA - 2020</li>
                  <li>Health Center at Franklin Park – Denver, CO - 2019-2020</li>
                  <li>Cleveland Clinic - Cleveland, OH - 2016-2018</li>
                  <li>Plantation Key Convalescent Center - Florida Keys, FL - 2012-2015</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
