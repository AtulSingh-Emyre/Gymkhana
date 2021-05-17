import React from 'react';
import { Button, Col, Container, Row} from 'react-bootstrap';
import './style.css'
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';
// @ts-ignore
import LazyLoad from "react-lazyload";
import { Parallax } from 'react-parallax';
import Feed from '../Feed';
// const homeimage = require('../src/assets/homepage-bg.jpg');

const Homepage = () => {
  const goDownOnPress = () => {
    console.log(1);
    
    const offsetTop  = document.getElementById("abt")!.offsetTop;
    window.scrollTo({
      top: offsetTop-100, 
      behavior: "smooth"
    });

  }
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
  return (
  <div>
    {/* <Parallax blur={{ min:-20, max:0 }} bgImage={require('../../assets/logoc.jpeg')} bgImageAlt="the cat" strength={500}> */}
     <div 
    // className={'home'}
    style={{...jumb, height: isTabletOrMobile? 'auto':'100%'}}  >
      <Container 
      className="hometextcontainer"
      >
        <CSSTransition in={true} appear={true} timeout={800} classNames='fade'>
          <div className='textdiv'>
            <Row>
              <h1 style={{margin:'auto', textAlign:'center'}}><b>The Students' Gymkhana</b> </h1>
            </Row>
            <Row style={{marginTop:20}}>
              <h2 style={{margin:'auto', textAlign:'center'}}>Indian Institute of Technology, Dharwad</h2>
            </Row>
            <Row style={{margin:'auto',marginTop:50}}>
            <div className="godownbutton" style={{margin:'auto', zIndex:1}} ><i onClick={() => goDownOnPress()} className="fa fa-angle-down" aria-hidden="true" style={{margin:'auto'}}/></div>
          </Row>
            
            </div>
        </CSSTransition>
      </Container>
    </div>
    {/* <div  style={{backgroundColor:'#3f8900', zIndex:-10, width:'100%'}}> */}
    {/* </Parallax> */}
    <div id="abt"  className="aboutus" >
    <LazyLoad height={200}>
      {/* <br />
      <br /> */}

      <CSSTransition in={true} appear={true} timeout={900} classNames='fade'>
        <Container style={{margin:'auto', width:'90%', 
        padding:20,
        marginTop:'-10vh', 
        position:'relative',
        backgroundColor:'white', zIndex:2}} 
        
        >
          <div style={{backgroundColor:'white', opacity:1}}>
          <div >
            <h2 style={{ color: 'blueviolet'}}>About</h2>
          </div>
          <div>
            <p style={{ color: 'black' }}>
        Students’ Gymkhana, IIT Dharwad is the hub of the numerous extra-curricular and co-curricular activities in IIT Dharwad ranging from sports to socio-cultural events. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.
                        </p>
            <p style={{ color: 'black' }}>
          The goal of the body is to bring overall development in IITians through cultivating and nurturing their extra-curricular talents.
                        </p>
            <Row>
          <Col xl={3} sm={5} md={5} xs={12} style={{margin:'auto'}}>
            <Button variant="dark" style={{width:'100%', textAlign:'center', maxHeight:50, borderRadius:25, backgroundColor:'#FF6F00'}} >Constitution</Button>
            </Col>
            <Col xl={6} sm={2} md={2} xs={0}
            ></Col>
            <Col xl={3} md={5} sm={5} xs={12} style={{margin:'auto'}}>
            <Button variant="dark" style={{width:'100%', textAlign:'center', maxHeight:50, borderRadius:25, backgroundColor:'#FF6F00'}} >Rule Book</Button>
            </Col>
            </Row>
          </div>
          </div>
        </Container>
      </CSSTransition>
      </LazyLoad>
      
      </div>
      {/* <LazyLoad height={200}> */}
      
      <Feed />
      </div>
  );
}

const jumb : React.CSSProperties = {
  position: 'relative',
  width: '100%',
  minHeight: '120vh',
  // paddingTop: 50,
  // backgroundImage:`url('https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-car-activity-board-background-material-image_155752.jpg')`,
  // backgroundImage:`url('https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-outdoor-publicity-board-background-image_127489.jpg')`,
  backgroundImage: `url('./homepage-bg.jpg')`,
  display: 'flex',
  // backgroundImage: homeimage,
  zIndex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  opacity: '1',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}


export default Homepage;
