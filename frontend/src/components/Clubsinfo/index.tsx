import React from 'react';
// import clubdata from '../../assets/clubdetails.json';
import './style.css';
import "bootstrap/dist/css/bootstrap.css";
// @ts-ignore
import ClubsCard from '../ClubsCard';
import {Col, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';


interface IProps {
    // club: Array<{
    //     id: string;
    //     clubname: string;
    //     secyname: string;
    //     memblink: string;
    //     logo: string;
    //     clubdesc: string;
    // }>
}

const clubData = [
    {
        name: 'Code Geass',
        src: require('../../assets/Technical Council/Clubs/codeGeass.png'),
        bg:'black',
        secy: 'Omkar DJ',
        desc: 'Code Geass is the official coding club at IIT Dharwad. It serves to bring together a community enriched in coding in terms both- algorithms as well as development.'
    },
    {
        name: 'Hardly Humans',
        src: require('../../assets/Technical Council/Clubs/AI.jpeg'),
        bg:'#101e38',
        secy: 'Akhilesh',
        desc: 'Code Geass is the official coding club at IIT Dharwad. It serves to bring together a community enriched in coding in terms both- algorithms as well as development.'
    }, {
        name: 'Robotics Club',
        src: require('../../assets/Technical Council/Clubs/AI.jpeg'),
        bg:'#101e38',
        secy: 'Akhilesh',
        desc: 'Code Geass is the official coding club at IIT Dharwad. It serves to bring together a community enriched in coding in terms both- algorithms as well as development.'
    },  {
        name: 'Code Geass',
        src: require('../../assets/Technical Council/Clubs/codeGeass.png'),
        bg:'black',
        secy: 'Omkar DJ',
        desc: 'Code Geass is the official coding club at IIT Dharwad. It serves to bring together a community enriched in coding in terms both- algorithms as well as development.'
    },
    {
        name: 'Hardly Humans',
        src: require('../../assets/Technical Council/Clubs/AI.jpeg'),
        bg:'#101e38',
        secy: 'Akhilesh',
        desc: 'Code Geass is the official coding club at IIT Dharwad. It serves to bring together a community enriched in coding in terms both- algorithms as well as development.'
    }, {
        name: 'Robotics Club',
        src: require('../../assets/Technical Council/Clubs/AI.jpeg'),
        bg:'#101e38',
        secy: 'Akhilesh',
        desc: 'Code Geass is the official coding club at IIT Dharwad. It serves to bring together a community enriched in coding in terms both- algorithms as well as development.'
    }
  
  ]
  

const Clubsinfo = (prop: IProps) => {
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 425px)' })
    let settings = {
        autoplay: true,
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <></>,
        prevArrow: <></>,
        responsive: [
          {
            breakpoint: 1010,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },{
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      
      const wideScreenView = (<Slider {...settings} >
      {clubData.map((current, index) => (
        <div className="out" style={{margin:10, padding:10, maxWidth:'100%'}} key={index}>
              <div style={{maxWidth:'95%'}}>
              <ClubsCard data={current}/>
              </div>
        </div>
      ))}
    </Slider>)

        const slimScreenView = (<> <Row>
        {clubData.map((current, index) => (
            <Col xs = {12} md={12}>
            <div className="out" style={{margin:10, padding:10, maxWidth:'100%'}} key={index}>
                  <div style={{maxWidth:'95%'}}>
                  <ClubsCard data={current}/>
                  </div>
            </div>
            </Col>
          ))}
          </Row>
          </>)

      return (
        <div style={{maxWidth:"95%", margin:'auto'}}>
            
        <h2 style={{width:'100%', textAlign:'center', padding:20}}> <strong>Technical Clubs </strong></h2>
        {isBigScreen? wideScreenView : slimScreenView}
      </div>
        
        
        
        )
    
};

const divStyle : React.CSSProperties = {
    height: 100,
    width: 100,
    backgroundColor: 'orange'
}

export default Clubsinfo;