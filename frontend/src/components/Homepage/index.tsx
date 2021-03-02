import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.css'


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
  
  </div>
);

export default Homepage;
