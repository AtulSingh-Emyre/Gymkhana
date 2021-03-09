import React, { useState, useEffect } from 'react';
import Card from '../../components/NoticesTable';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {CSSTransition} from 'react-transition-group';

const Notices: React.FC = () => {
  return (
    <>
    <Header />
    <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
      <Card/>
      </CSSTransition>
      <Footer />
    </>
  );
};

export default Notices;
