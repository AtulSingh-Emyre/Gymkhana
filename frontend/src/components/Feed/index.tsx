import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { Container } from 'react-bootstrap/lib/Tab';
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';
import './styles.css';

const data = [
    {
        title: 'Summer of Innovation, 2021',
        desc: 'A technical event lasting for the entirety of summer which involves release of problem statements across several domains.',
        img: require('../../assets/Feed/Summer_Of_Innovation.png'),
        href: 'https://oss2019.github.io/summer-of-innovation-2021/#/'
    },{
        title: 'Inter Branch Chess Tournament', 
        desc: 'A team based rapid chess tournament with prizes worth 2k.',
        img: 'https://placeimg.com/640/480/arch',
        href: 'https://oss2019.github.io/summer-of-innovation-2021/#/'
    },{
        title: 'Summer of innovation, 2021',
        desc: '   A technical event lasting for the entirety of summer which involves release of problem statements across several domains.',
        img: 'https://placeimg.com/640/480/arch',
        href: 'https://oss2019.github.io/summer-of-innovation-2021/#/'
    }
];


const Feed = () => {
    const [card, setCard] = useState(null);
    const onCardChange = (event:any) => {
        console.log("Card", event);
    }
    return (
        <Container style={{
            height:'100%',
            width:'100%', 
            margin:'auto', marginTop:50}}>
        <div >
        <Row style={{margin:'auto', marginTop:10}}>
            <h2 style={{color: 'blueviolet', textAlign:'center',margin:'auto', marginBottom:20}}>
                Recent Activity
            </h2>
        </Row>
        <Row>
        <Col xl ={12} md = {12} xs={12}>   
        <div style={{width:'100%', height:'100%'}}> 
        <StackedCarousel
          autoRotate={true}
          cardClassName="homeFeedCard"
          onCardChange={onCardChange}
          style={{ width:'90%', height:'100%', minHeight:320, backgroundColor:'white'}}
          >
              {
                  data.map((cardData) => <div style={{
                    backgroundColor:'white',
                    color:'black', 
                    height:'100%', position:'relative'}}>
                    <Row style={{height:'100%'}}>
                        <Col xl={4} md={5} xs={12}>
                        <div style={{width:'100%', height:'100%'
                    ,backgroundImage:`url(`+cardData.img+`)`,
                    backgroundSize:'cover'
                    }}/>
                        {/* <img key="img1" src={cardData.img} height={500} />   */}
                
                        </Col>
                        <Col xl ={8} md = {7} xs={12} >
                            <Row style={{margin:'auto', padding:10, marginTop:50, zIndex:2, position:'relative'}}>
                            <h3>
                            {cardData.title}
                            </h3>
                            <p>
                            {cardData.desc}
                            </p>
        
                            </Row>
                        </Col>
                    </Row>
                </div>)
              }
        </StackedCarousel>
        </div>
        </Col>
        </Row>
        </div>
        </Container>
    );
}

export default Feed;
