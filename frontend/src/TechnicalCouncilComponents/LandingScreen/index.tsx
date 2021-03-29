import React from 'react';
import { Container, Row} from 'react-bootstrap';
import './styles.css'
import { useMediaQuery } from 'react-responsive';
import { Parallax } from 'react-parallax';
// @ts-ignore
const LandingScreen = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
  return (
  <div>
      <Parallax blur={{ min:-20, max:0 }} bgImage="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX38879118.jpg" bgImageAlt="the cat" strength={500}>
        <div className="homeTech"  style={{...jumb,  height: isTabletOrMobile? 'auto':'100%'}}>
        <Container className="homeTechtextcontainer" >
                <Parallax strength={300}>
                <h1 style={{margin:'auto', fontFamily:'Cambria'}}>Technical Council</h1>
                <h3 style={{margin:'auto', fontFamily:'Cambria'}}>IIT Dharwad</h3>
                </Parallax>
        </Container>
        </div>
      </Parallax>
  </div>
);
  }
const jumb : React.CSSProperties = {
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  opacity: '0.90',
}


export default LandingScreen;
