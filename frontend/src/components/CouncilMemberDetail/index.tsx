import React from 'react';
import { Row, Col, Card, Image, CardColumns, Button } from 'react-bootstrap';
import MemberCard from '../MemberCard';

const temp = [
  {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  },{
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  },{
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  },{
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  }
]

const Details = () => {
  
  
  
  
  return ( 
  <div>
    <Row>
      <Col xs={3} md={3}>
        <MemberCard person={temp[0]}/>
      </Col>
      <Col xs={3} md={3}>
        <MemberCard person={temp[2]}/>
      </Col>
      <Col xs={3} md={3}>
        <MemberCard person={temp[1]}/>
      </Col>
      <Col xs={3} md={3}>
        <MemberCard person={temp[1]}/>
      </Col>
    </Row>
  </div>

)};

export default Details;
