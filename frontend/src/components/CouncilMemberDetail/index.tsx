import React from 'react';
import { Row, Col, Card, Image, CardColumns, Button } from 'react-bootstrap';
import MemberCard from '../MemberCard';
import './style.css'

const temp = [
  {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  }, {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  }, {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  }, {
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
    <div style={{ height:'125%' }}>
      <Row style={{height: '50%', width:'100%', padding:'2.5%'}}>
        <Col 
        xs={4} md={3} className="comp"
        style={col_style}
        >
          <MemberCard person={temp[0]} />
        </Col>
        <Col 
        xs={4} md={3} className="comp"
        style={col_style}
        >
          <MemberCard person={temp[2]} />
        </Col>
        <Col 
        xs={4} md={3} className="comp" 
        style={col_style}>
          <MemberCard person={temp[1]} />
        </Col>
      </Row>
      <Row style={{height: '50%', width:'100%', padding:'2.5%'}}>
        <Col xs={3} md={3} className="comp"
        style={col_style}
        >
          <MemberCard person={temp[1]} />
        </Col>
        <Col xs={3} md={3} className="comp"
        style={col_style}
        >
          <MemberCard person={temp[3]} />
        </Col>
      </Row>
    </div>

  )
};

const col_style : React.CSSProperties = {
  flex:1,
  // width:'20%',
  height:'100%'
} 
export default Details;
