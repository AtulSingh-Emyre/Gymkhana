import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
// import logo from '../../assets/interiitsmeet.jpg';

interface IProps {
  images : {
      image1: string,
      title1: string,
      caption1: string,
      image2: string,
      title2: string,
      caption2: string,
      image3: string,
      title3: string,
      caption3: string,
  }
}




const Carouselcomp = (prop : IProps) => {

  var image1 = prop.images.image1
  return (
    
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // `url(${require(`../../assets/logoc.jpg`)})`
            src={prop.images.image1}
            alt={prop.images.caption1}
          />
          <Carousel.Caption>
            <h3>{prop.images.title1}</h3>
            <p>{prop.images.caption1}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carouselcomp
