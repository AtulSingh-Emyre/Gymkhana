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
        <div className="homeTech"  style={{...jumb,  height: isTabletOrMobile? 'auto':'100%'}}>
          <Container className="homeTechtextcontainer" style={{position:'relative', margin:'auto', marginTop:'15'}}>
                <img src={require('../../assets/Technical Council/councilLogo.png')} width={170} height={150} style={{margin:'auto'}}></img>
                <h1 style={{margin:'auto', fontFamily:'Cambria'}}>Technical Council</h1>
                <h3 style={{margin:'auto', fontFamily:'Cambria'}}>IIT Dharwad</h3>
                
        </Container>
        </div>
      {/* </Parallax> */}
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
  backgroundColor:'black',
  opacity: '0.90',
}


export default LandingScreen;
