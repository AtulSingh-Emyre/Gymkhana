import React from 'react';
import { Button, Form, FormControl, Row, Col,Container } from 'react-bootstrap';

const Input = () => {
  return (
    <div>
      <div style={{marginTop:'90px',textAlign:'center'}}>
        <h2 style={{color:'black'}}>Contact Form</h2>
      </div>
    <div className="my-5" >
      <Form>
        <div className="my-2">
          <Row>
            <Col>
              <Form.Control placeholder="Name" type="text" />
            </Col>
            <Col>
              <Form.Control placeholder="Email" type="email" />
            </Col>
          </Row>
        </div >
        <div className="my-2">
          <Row>
            <Col>
              <Form.Control placeholder="Phone Number" type="text" />
            </Col>
            <Col>
              <Form.Control placeholder="Institute Name" type="text" />
            </Col>
          </Row>
        </div>
      </Form>
      <div className="my-2" style={{textAlign:"center"}}>
        <Button variant="secondary" size="lg">
          Submit
    </Button>
      </div>
    </div>
    </div>
  )
}

export default Input
