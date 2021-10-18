import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Homepage from '../../components/Homepage';
import Officebearers from '../Officebearers';
import About from '../../components/About';
import Feed from '../../components/Feed';
import Gallery from '../Gallery';
import Councils from '../Councils';

const Dashboard: React.FC = () => {
  return (
    <div style={{maxWidth:'100%'}} >
       <div style={{maxWidth:'100%'}}>
      <Header active={{home:true}} /></div>
      <Homepage/>
      <About/>
      <div style={{margin:'auto'}}>
      <Councils/>
      </div>
      <Feed />
      <Officebearers />
      <Gallery />
      <div style={{maxWidth:'100%'}}>
      <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
