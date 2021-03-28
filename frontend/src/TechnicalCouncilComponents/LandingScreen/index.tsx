import React from 'react';
import { Container, Row} from 'react-bootstrap';
import './styles.css'
import { useMediaQuery } from 'react-responsive';
// @ts-ignore
const LandingScreen = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
  return (
  <div>
    <div 
    className={'homeTech'}
    style={{...jumb,  height: isTabletOrMobile? 'auto':'100%'}}  >
      <Container className="homeTechtextcontainer">
              <h1 >Technical Council</h1>
              <h3>IIT Dharwad</h3>
      </Container>
    </div>
    
  </div>
);
  }
const jumb : React.CSSProperties = {
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  backgroundColor:'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  opacity: '0.90',
}


export default LandingScreen;
