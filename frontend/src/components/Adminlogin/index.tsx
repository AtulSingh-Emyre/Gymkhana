import React from 'react';
import { Form, Button } from 'react-bootstrap';


const Adminlogin = () => (
  <div >
    <h2 style={{ margin: '35px', textAlign: 'center',minWidth:'250px' }}>IITDh Gymkhana Admin Login</h2>
    <div style={{ margin: '55px' }}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </div>
    <div style={{ margin: '25px', textAlign: 'center' }}>
      <Button variant="primary" type="submit">
        Submit
    </Button>
    </div>
  </div>
);

export default Adminlogin;

