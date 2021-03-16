import React, { useState, useEffect } from 'react';
import Clubsinfo from '../../components/Clubsinfo';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carouselcomp from '../../components/Carousel';
import BootstrapTable from 'react-bootstrap-table-next';
import clubdata from '../../assets/clubdetails.json'
import Container from 'react-bootstrap/Container';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
// @ts-ignore
import LazyLoad from "react-lazyload";

const logo = require('../../assets/interiitsmeet.jpg');
const Technicalcouncil: React.FC = () => {
  const columns = [
    {
      dataField: 'clubname',
      text: 'Technical Clubs'
    }, {
      dataField: 'secyname',
      text: 'Club Secretary'
    },
    {
      dataField: 'Contactdetails',
      text: 'Contact'
    },
  ];

  return (
    <>
      <Header active={{council: true}} />
      <Carouselcomp images={{
        image1: logo, title1: "", caption1: "hello",
        image2: logo, title2: "", caption2: "",
        image3: logo, title3: "", caption3: "",
      }} />

      <br />
      <CSSTransition in={true} appear={true} timeout={800} classNames='fade'>
      <Container style={{padding:'10px'}}>
        <div>
          <h3 style={{ textDecoration: 'underline' }}>About</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </Container>
      </CSSTransition>
      <hr />
      <LazyLoad height={50}>
      <Clubsinfo club={clubdata.technical} />
      </LazyLoad>
      <hr />
      <h3 style={{  textAlign: 'center' }}>Club Details</h3>
      <LazyLoad height={50}>
        <CSSTransition in={true} appear={true} timeout={800} classNames='fadeclubs'>
      <Container>
      <BootstrapTable keyField='id' data={clubdata.technical} columns={columns} />
      </Container>
      </CSSTransition>
        </LazyLoad>
      <Footer />
    </>
  );
};

export default Technicalcouncil;
