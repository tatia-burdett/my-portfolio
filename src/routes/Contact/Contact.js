import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css'

export default function Contact() {
  return (
    <Container className='contact' id='contact'>
      <h1>Contact Me</h1>
      <hr />
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Form action="https://formspree.io/f/xzbkaken " method="POST">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Name" />

            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />

            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />

            <Button variant='dark' type='submit'>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container> 
  )
}
