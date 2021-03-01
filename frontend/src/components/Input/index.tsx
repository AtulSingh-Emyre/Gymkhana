import React from 'react';
import { Button, Form, FormControl, Row, Col,Container } from 'react-bootstrap';

const Input = (props: any) => {
  return (
    <Container>
      <div>
        <label htmlFor="">{props.title}</label>
      </div>
    <div className="my-5">
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
    </Container>
  )
}

export default Input
