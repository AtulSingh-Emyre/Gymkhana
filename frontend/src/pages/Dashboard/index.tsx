import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Homepage from '../../components/Homepage';


const Dashboard: React.FC = () => {
  return (
    <div style={{minWidth:'100%'}} >
      <Header active={{home:true}} />
      <Homepage/>
      <Footer />
    </div>
  );
};

export default Dashboard;
