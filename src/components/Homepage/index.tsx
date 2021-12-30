import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-scroll";
import { Parallax } from 'react-parallax';
import { styleSheet } from './styles';
import './style.css';
// @ts-ignore

const Homepage = () => {
  
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' });

  return (
    <div style={styleSheet.fullWidth}>

<Parallax blur={1} bgImage='./homepage-bg.jpeg' bgImageAlt="the cat" strength={200}>

      <div style={{...styleSheet.jumb, height: isTabletOrMobile? 'auto':'100%'}}>
      
      <Container className="hometextcontainer">
        <CSSTransition in={true} appear={true} timeout={800} classNames='fade'>
          <div className='textdiv'>
            <Row>
              <h1 style={styleSheet.heading}><b>The Students' Gymkhana</b> </h1>
            </Row>
            <Row style={styleSheet.m20}>
              <h2 style={styleSheet.heading}>Indian Institute of Technology, Dharwad</h2>
            </Row>
            <Row style={styleSheet.margin}>
              <div className="godownbutton" style={styleSheet.elevate}>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                  <i className="fa fa-angle-down" aria-hidden="true" style={styleSheet.ma}/>
                </Link>
              </div>
            </Row>
          </div>
        </CSSTransition>
      </Container>
      </div>
      </Parallax>
    </div>
  );
}


export default Homepage;
