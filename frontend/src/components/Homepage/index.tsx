import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './style.css'
import logo from "../../assets/logo.png";


const Homepage = () => (
  <div>
    <div className="home ">
      <div className="tex">
        <Row>
          <h1>Welcome to IIT Dharwad</h1>
        </Row>
        <Row>
          <p>The home of pink sunsets, rich heritage and culture and, of
								course, engineering xP.</p>
        </Row>

        <Row>
          <Button variant="warning">Know more</Button>
        </Row>
      </div>
    </div>
    <div className="aboutus">
      <Row>
        <Col style={{ color: 'black' }}>
          About us
        </Col>
        <Col>
          <Image src={logo} style={{ width: 70, marginTop: -7, marginLeft: 10 }} rounded />
        </Col>
      </Row>
    </div>
  </div>
);

export default Homepage;


