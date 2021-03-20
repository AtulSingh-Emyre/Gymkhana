import React, { useState, useEffect } from 'react';
// import Clubsinfo from '../../components/Clubsinfo';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import clubdata from '../../assets/clubdetails.json'
// import Container from 'react-bootstrap/Container';
// import { CSSTransition, TransitionGroup, } from 'react-transition-group';
// @ts-ignore
// import LazyLoad from "react-lazyload";
import PageStarter from '../../template/PageStarter';
import Clubsinfo from '../../components/Clubsinfo';

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
      <PageStarter heading={'TECHNICAL COUNCIL'}>
      <div>
        <Clubsinfo  />
      </div>
      </PageStarter>
      <Footer />
    </>
  );
};

export default Technicalcouncil;
