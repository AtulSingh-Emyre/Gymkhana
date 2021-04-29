import { MDBCol, MDBRow } from 'mdbreact';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../assets/interiitsmeet.jpg';
import info from '../../assets/sportsevents.json';
import './style.css';

const ClubsImages: React.FC = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
      setIndex(selectedIndex);
    };

    return (
      <MDBRow className="container clubsection" style={{height:'auto', width:'auto', marginLeft:'auto', marginRight:'auto'}}>
        <MDBCol>
          <div className='container' style={{...smoothScroll}}>
            <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img src={logo} alt="First Slide"/>
                <Carousel.Caption>
                  <h4>{info.events[0].name}</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={logo} alt="First Slide"/>
                <Carousel.Caption>
                  <h4>{info.events[1].name}</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={logo} alt="First Slide"/>
                <Carousel.Caption>
                  <h4>{info.events[2].name}</h4>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <br/><br/>
          </div>
        </MDBCol>
        <MDBCol>
          <div style={{textAlign: 'left'}}>
            <h4 style={{color: '#1f4baa', fontWeight: 'bolder'}}>{info.events[index].name}</h4>
            <p style={{color: 'white'}}>{info.events[index].description}</p>
          </div>
        </MDBCol>
      </MDBRow>
    );
  };

  const smoothScroll : React.CSSProperties = {
    scrollBehavior: 'smooth',
    msScrollTranslation: 'vertical-to-horizontal'
  }
  
  export default ClubsImages;