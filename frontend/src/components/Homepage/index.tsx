import React from 'react';
import { Container, Row, Col, Button, Image, Jumbotron } from 'react-bootstrap';
import './style.css'
import { StyleSheet } from 'aphrodite';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const testani = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

const Homepage = () => (
  <div>

    <Jumbotron style={jumb}>
      <Container style={{ flex: 1 }}>
        <Row>
          <h1 style={{ color: 'white' }}>Welcome to IIT Dharwad</h1>
        </Row>
        <Row>
          <p style={{ color: 'white' }}>The home of pink sunsets, rich heritage and culture and, of
								course, engineering xP.</p>
        </Row>
      </Container>
      <Row>
        <Container style={{ flex: 1, bottom: 10 }}>
          <button className="bbtn1" ><a href="#" style={{ color: 'white' }}>Know More</a></button>
        </Container>
      </Row>
    </Jumbotron>
    <div
      style={aboutUsContainer}
    // className="aboutus"
    >
      <Container>
        <div >
          <h2 style={{ color: 'blueviolet' }}>About</h2>
        </div>
        <div>
          <p style={{ color: 'black' }}>
            Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.
                        </p>
          <p style={{ color: 'black' }}>
            The moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in English means "Perfection in action is Yoga". Our goal is to bring overall development in IITians through cultivating and nurturing their extra-curricular talents.
                        </p>

          <button className="bbtn"><a href="#" style={{ color: 'white' }}>Constitution</a></button>
        </div>
      </Container>
    </div>
  </div>
);

const jumb: React.CSSProperties = {
  backgroundImage: `url(${require(`../../assets/logoc.jpg`)})`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
  width: '100%',
  position: 'relative',
  minHeight: '400px',
}

const jumbRowContainer: React.CSSProperties = {

}

const aboutUsContainer: React.CSSProperties = {
  maxWidth: '100%',
  position: 'relative',

}

const styles = StyleSheet.create({
  jumb: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundImage: `url(${require(`../../assets/logoc.jpg`)})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    width: '100%',
    minHeight: '400px'
  }
})

export default Homepage;
