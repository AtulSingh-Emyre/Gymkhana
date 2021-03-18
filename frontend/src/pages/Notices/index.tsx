import React, { useState, useEffect } from 'react';
import Card from '../../components/NoticesTable';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {CSSTransition} from 'react-transition-group';
import PageStarter from '../../template/PageStarter';

const Notices: React.FC = () => {
  return (
    <>
    <Header active={{notice:true}}/>
      <PageStarter heading={'NOTICES'}>
      <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
      <Card/>
      </CSSTransition>
      </PageStarter>
      <Footer />
    </>
  );
};

export default Notices;
