import React from 'react';
import { Button, Form, FormControl, Row, Col } from 'react-bootstrap';

const Input = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
    </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>
  )
}

export default Input
