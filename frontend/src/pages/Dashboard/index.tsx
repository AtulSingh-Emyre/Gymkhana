import React from 'react';

import Header from '../../components/Header';
import Homepage from '../../components/Homepage';
import About from '../../components/About';
import Councils from '../Councils';
import Feed from '../../components/Feed';
import Officebearers from '../Officebearers';
import Gallery from '../Gallery';
import Footer from '../../components/Footer';
import { styleSheet } from './styles';

const Dashboard: React.FC = () => {
  return (
    <div style={styleSheet.container}>
      <div style={styleSheet.container}>
        <Header active={{home:true}} />
      </div>
      <Homepage/>
      <About/>
      <div style={styleSheet.councils}>
        <Councils/>
      </div>
      <Feed/>
      <Officebearers/>
      <Gallery/>
      <div style={styleSheet.container}>
        <Footer/>
      </div>
    </div>
  );
};

export default Dashboard;
