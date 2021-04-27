import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';
import './styles.css';
const Feed = () => {
    const [card, setCard] = useState(null);
    const onCardChange = (event:any) => {
        console.log("Card", event);
    }
    return (
        <div style={{width:'90%', margin:'auto', marginTop:50}}>
        <Row>
        <Col xl ={6} md = {4} xs={12}>
            <Row>
            <h1>
                Feed
            </h1>
            </Row>
            <Row style={{margin:'auto', marginTop:50}}>
            <h3>
                Summer of innovation II
            </h3>
            <p>
                A technical event lasting for the entirety of summer which involves
                release of problem statements across several domains.
            </p>
            </Row>
        </Col>
        <Col xl ={6} md = {8} xs={12}>   
        <div style={{width:'100%'}}> 
        <StackedCarousel
          autoRotate={false}
          cardClassName="homeFeedCard"
          onCardChange={onCardChange}
          style={{ width:'90%', height:'100%', minHeight:320}}
          >
          <img key="img1" src="https://placeimg.com/640/480/arch" width={1000} height={1000} />
          <img key="img2" src="https://placeimg.com/640/480/tech" width={1000} height={1000} />
          <img key="img3" src="https://placeimg.com/640/480/nature" width={1000} height={1000} />
          <img key="img4" src="https://placeimg.com/640/480/animals" width={1000} height={1000} />
        </StackedCarousel>
        </div>
        </Col>
        </Row>
        </div>
    );
}

export default Feed;
