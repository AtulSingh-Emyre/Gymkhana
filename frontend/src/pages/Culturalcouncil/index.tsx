import React, { useState, useEffect } from 'react';
// import Clubsinfo from '../../components/Clubsinfo';
import CultHeader from '../../CulturalCouncilComponents/CultHeader';
import Footer from '../../components/Footer';
import Gallery from '../../CulturalCouncilComponents/Gallery'
// import clubdata from '../../assets/clubdetails.json';
// import Carouselcomp from '../../components/Carousel';
// import Container from 'react-bootstrap/Container';
import { useMediaQuery } from 'react-responsive';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
// import { CSSTransition, TransitionGroup, } from 'react-transition-group';
// @ts-ignore
// import LazyLoad from "react-lazyload";

// const logo = require('../../assets/interiitsmeet.jpg');
const Culturalcouncil: React.FC = () => {
  // const slimScreen = useMediaQuery({query:'(max-device-width: 900px)'})
  // const columns = [
  //    {
  //     dataField: 'clubname',
  //     text: 'Cultural Clubs'
  //   }, {
  //     dataField: 'secyname',
  //     text: 'Club Secretary'
  //   }, {
  //     dataField: 'Contactdetails',
  //     text: 'Contact'
  //   },
  // ];
  // const smallScreenCols = [
  //   {
  //     dataField: 'clubname',
  //     text: 'Cultural Clubs'
  //   }, {
  //     dataField: 'secyname',
  //     text: 'Club Secretary'
  //   }, {
  //     dataField: 'Contactdetails',
  //     text: 'Contact'
  //   },
  // ]
  return (
    <>
      <div className='CultCouncil' style={{...main}}>
        <div className='MainCard' style={{...card}}>
          <div style={{padding: '20px'}}>
            <Gallery />
          </div>
        </div>
      </div>
      {/* <Header active={{council:true}} /> */}
      {/* <Carouselcomp images={{
        image1: logo, title1: "", caption1: "hello",
        image2: logo, title2: "", caption2: "",
        image3: logo, title3: "", caption3: "",
      }} />
      <br />
      <CSSTransition in={true} appear={true} timeout={800} classNames='fade'>
      <Container style={{ padding: '10px' }}>
        <div>
          <h3 style={{ textDecoration: 'underline' }}>About</h3>
          <p style={{ padding: '2px', margin: '3px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </Container>
      </CSSTransition>
      <hr />
      <LazyLoad height={50}>
      <Clubsinfo club={clubdata.cultural} />
      </LazyLoad>
      <hr />
      <h3 style={{  textAlign: 'center' }}>Club Details</h3>
      <LazyLoad height={50}>
        <CSSTransition in={true} appear={true} timeout={800} classNames='fadeclubs'>
      <Container>
       <BootstrapTable keyField='id' data={clubdata.cultural} columns={slimScreen? smallScreenCols : columns} />
       </Container>
       </CSSTransition>
        </LazyLoad> */}
      {/* <Footer /> */}
    </>
  );
};

const card:React.CSSProperties = {
  width:'90%',
  height:'100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '0',
  borderRadius:'60px'
}

const main:React.CSSProperties = {
  background: 'linear-gradient(to right, #4B515D, #3E4551)',
  height: 'auto'
}

export default Culturalcouncil;
