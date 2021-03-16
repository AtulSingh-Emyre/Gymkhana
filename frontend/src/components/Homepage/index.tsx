import React from 'react';
import { Container, Row} from 'react-bootstrap';
import './style.css'
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';
// @ts-ignore
import LazyLoad from "react-lazyload";

const Homepage = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
  return (
  <div>
    <div 
    className={'home'}
    style={{...jumb, backgroundAttachment:'fixed', height: isTabletOrMobile? 'auto':'100%'}}  >
      <Container className="hometextcontainer">
        <CSSTransition in={true} appear={true} timeout={800} classNames='fade'>
          <div className='textdiv'>
            <Row>
              <h1 >Welcome to IIT Dharwad</h1>
            </Row>
            <Row>
              <p>The home of pink sunsets, rich heritage and culture and, of
								course, engineering xP.</p>
            </Row>
            <br /><br /><br />
            <a href="#abt" className="godownbutton" ><i className="fa fa-angle-down" aria-hidden="true"></i></a>
          </div>
        </CSSTransition>
      </Container>
    </div>
    <div className="aboutus" id="abt">
    <LazyLoad height={200}>
      <br />
      <br />

      <CSSTransition in={true} appear={true} timeout={600} classNames='fade'>
        <Container >
          <div >
            <h2 style={{ color: 'blueviolet'}}>About</h2>
          </div>
          <div>
            <p style={{ color: 'black' }}>
              Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.
                        </p>
            <p style={{ color: 'black' }}>
              The moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in English means "Perfection in action is Yoga". Our goal is to bring overall development in IITians through cultivating and nurturing their extra-curricular talents.
                        </p>

            <button className="bbtn"  ><a href="#" style={{ color: 'white' }}>Constitution</a></button>
          </div>
        </Container>
      </CSSTransition>
      </LazyLoad>
    </div>
  </div>
);
  }
const jumb : React.CSSProperties = {
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  // paddingTop: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  opacity: '0.90',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}


export default Homepage;
