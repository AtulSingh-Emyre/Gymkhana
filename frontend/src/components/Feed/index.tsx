import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { StackedCarousel } from 'react-stacked-carousel';
import 'react-stacked-carousel/dist/index.css';

import { data } from '../../assets/feedData';
import { styleSheet } from './styles';
import './styles.css';

const Feed = () => {

    return (
        <div style={styleSheet.container} id={'recentActs'}>
            <div style={styleSheet.title} className={'child1'} >
                <Container >
                    <strong>
                        <b>
                            <h3 style={styleSheet.heading}>
                                {'RECENT ACTIVITIES'}
                            </h3>
                        </b>
                    </strong>
                </Container>
            </div>
            <Row style={styleSheet.row}>
                <Col xl ={12} md = {12} xs={12}>   
                    <div style={styleSheet.fullWidthHeight}> 
                        <StackedCarousel autoRotate={true} cardClassName="homeFeedCard" style={styleSheet.carousel}>
                            {data.map((cardData, index) => (
                                <div style={styleSheet.card} key={index}>
                                    <Row style={styleSheet.fullHeight}>
                                        <Col xl={4} md={5} xs={12}>
                                            <div style={{ backgroundImage: `url(${cardData.img})`, ...styleSheet.cardbg }}/>
                                        </Col>
                                        <Col xl ={8} md = {7} xs={12} >
                                            <Row style={styleSheet.cardContent}>
                                                <a href={cardData.href}>
                                                    <h3>
                                                        {cardData.title}
                                                    </h3>
                                                </a>
                                                <p>
                                                    {cardData.desc}
                                                </p>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            ))
                            }
                        </StackedCarousel>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Feed;
