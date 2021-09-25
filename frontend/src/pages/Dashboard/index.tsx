import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Homepage from '../../components/Homepage';
import Officebearers from '../Officebearers';
import Calendar from '../Calendar';
import About from '../../components/About';
import Feed from '../../components/Feed';
import Gallery from '../Gallery';
import Councils from '../Councils';

const Dashboard: React.FC = () => {
  return (
    <div style={{minWidth:'100%'}} >
      <Header active={{home:true}} />
      <Homepage/>
      <About/>
      <Councils/>
      <Feed />
      <Officebearers />
      <Gallery />
      {/* <Calendar />       */}
      <Footer />
    </div>
  );
};

export default Dashboard;
