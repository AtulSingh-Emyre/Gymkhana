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
        desc: 'Buckle up for a team based inter branch rapid chess tournament with prizes worth 2k.',
        img: require('../../assets/Feed/Inter_Branch_Chess.jpeg'),
        href: ''
    },{
        title: 'A Musical Evening with Calvin Jerome Suares',
        desc: 'An audience pleaser music show with an amazing and talented singer Calvin Jerome Suares to rock the evening!',
        img: require('../../assets/Feed/Calvin_Jerome_Suares_Live_Show.png'),
        href: 'https://www.youtube.com/channel/UCrx2MGi5Za6RoMILjTmT9Cg'
    }
];


const Feed = () => {
    const [card, setCard] = useState(null);
    const onCardChange = (event:any) => {
        console.log("Card", event);
    }
    return (
        <div style={{maxWidth:'100%', width:'100%', backgroundColor:'white'}} id={'recentActs'}>
        {/* <PageStarter heading={'RECENT ACTIVITIES'} id={'recentActs'}> */}
        <div style={{width:'100%', position:'relative', top:0, paddingTop:20, height:'150px', zIndex:2}} className={'child1'} >
            <Container >
              <strong> <b>
                <h3 style={{maxWidth:'100%',textAlign:'center', position:'relative', top:'20px', bottom:0, right:10, left:10, color:'blueviolet', fontFamily:'Arial Black'}}>
                {/* // OFFICE BEARERS */}
                {'RECENT ACTIVITIES'}
                </h3>
                </b> </strong>
            </Container>
          </div>
            
        <Row style={{maxWidth:'100%', margin:'auto', backgroundColor:'white'}}>
        <Col xl ={12} md = {12} xs={12}>   
        <div style={{width:'100%', height:'100%'}}> 
        <StackedCarousel
          autoRotate={true}
          cardClassName="homeFeedCard"
          onCardChange={onCardChange}
          style={{ width:'100%', height:'auto', minHeight:350, minWidth:210}}
          >
              {
                  data.map((cardData) => <div style={{
                    // backgroundColor:'white',
                    color:'black', 
                    width:'100%',
                    // minWidth:280,
                    height:'100%', 
                    position:'relative'}}
                    
                    >
                    <Row style={{height:'100%'}}>
                        <Col xl={4} md={5} xs={12}>
                        <div style={{width:'100%',height:'100%'
                    ,backgroundImage:`url(`+cardData.img+`)`,
                    backgroundSize:'cover'
                    }}/>
                        </Col>
                        <Col xl ={8} md = {7} xs={12} >
                            <Row style={{width:'100%', height:'100%', margin:'auto', padding:10, marginTop:50, zIndex:2, position:'relative'}}>
                            <a href={cardData.href}>
                            <h3>
                            {cardData.title}
                            </h3></a>
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
        {/* </PageStarter> */}
        </div>
    );
}

export default Feed;
