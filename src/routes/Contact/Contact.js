import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Contact.css'

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <h3>Contact Me</h3>
      <Container className='contact-section'>
        <Form action="https://formspree.io/f/xzbkaken " method="POST">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Name" />

          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />

          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />

          <Button variant='dark' type='submit'>Submit</Button>
        </Form>
      </Container>
    </section> 
  )
}
