import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../assets/interiitsmeet.jpg';
import { useMediaQuery } from 'react-responsive';

function Gallery() {
    // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    return (
        <div style={{...st}}>
            <Carousel fade controls indicators style={{width:'auto', height:'auto'}}>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src={logo} alt="Img 1" />
                    <Carousel.Caption>
                        <p>Lorem Ipsum 1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className="d-block w-100" src={logo} alt="Img 2" />
                    <Carousel.Caption>
                        <p>Lorem Ipsum 2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={logo} alt="Img 3" />
                    <Carousel.Caption>
                        <p style={{fontSize:'100x'}}>Lorem Ipsum 3</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

const st : React.CSSProperties = {
    position: 'relative',
    width: '45%',
    height: '45%',
    marginTop:'0', 
    marginLeft:'auto', 
    marginRight:'auto'
}

export default Gallery;