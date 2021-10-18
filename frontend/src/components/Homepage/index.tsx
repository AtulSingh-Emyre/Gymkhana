import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-scroll";
import './style.css'
import { CSSTransition } from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';
// @ts-ignore

const Homepage = () => {
  
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
  return (
  <div style={{maxWidth:'100%'}}>
     <div style={{...jumb, height: isTabletOrMobile? 'auto':'100%'}}>
      <Container className="hometextcontainer">
        <CSSTransition in={true} appear={true} timeout={800} classNames='fade'>
          <div className='textdiv'>
            <Row>
              <h1 style={{margin:'auto', textAlign:'center'}}><b>The Students' Gymkhana</b> </h1>
            </Row>
            <Row style={{marginTop:20}}>
              <h2 style={{margin:'auto', textAlign:'center'}}>Indian Institute of Technology, Dharwad</h2>
            </Row>
            <Row style={{margin:'auto',marginTop:50}}>
            <div className="godownbutton" style={{margin:'auto', zIndex:1}} ><Link to="about" spy={true} smooth={true} offset={-100} duration={500}> <i className="fa fa-angle-down" aria-hidden="true" style={{margin:'auto'}}/> </Link> </div>
          </Row>
            
            </div>
        </CSSTransition>
      </Container>
    </div>
    </div>
  );
}

const jumb : React.CSSProperties = {
  position: 'relative',
  width: '100%',
  minHeight: '120vh',
  backgroundImage: `url('./homepage-bg.jpeg')`,
  display: 'flex',
  zIndex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  opacity: '1',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}


export default Homepage;
