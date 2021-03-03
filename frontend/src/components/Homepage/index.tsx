import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './style.css'
import { MDBBtn } from "mdbreact";



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
      <div>
        <h2 style={{ color: 'blueviolet' }}>About</h2>
      </div>
      <div>
        <p style={{ color: 'black' }}>
          Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.
                        </p>
        <p style={{ color: 'black' }}>
          The moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in English means "Perfection in action is Yoga". Our goal is to bring overall development in IITians through cultivating and nurturing their extra-curricular talents.
                        </p>

        <button className="bbtn"><a href="#" style={{color:'white'}}>Constitution</a></button>
      </div>
    </div>
  </div>
);

export default Homepage;
