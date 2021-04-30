import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../assets/interiitsmeet.jpg';
import { useMediaQuery } from 'react-responsive';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBMask, MDBView } from 'mdbreact';

function Gallery() {
    const st : React.CSSProperties = {
        position: 'relative',
        width: '65%',
        height: '65%',
        marginTop:'2%', 
        marginLeft:'auto', 
        marginRight:'auto'
    }
    return (
        <div style={st}>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <div>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/interiitsmeet.jpg')}
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </div>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Slide 1</h3>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <div>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/interiitsmeet.jpg')}
                            alt="Second slide"
                            />
                        <MDBMask overlay="black-light" />
                        </div>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Slide 2</h3>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <div>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/interiitsmeet.jpg')}
                            alt="Second slide"
                            />
                        <MDBMask overlay="black-light" />
                        </div>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Slide 3</h3>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    )
}

export default Gallery;