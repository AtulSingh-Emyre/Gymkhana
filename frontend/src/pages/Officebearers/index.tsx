import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Details from '../../components/CouncilMemberDetail';

const Officebearers: React.FC = () => {
  // making the page responsive:
  return (
    <div style={container}>
      <Header />
      <Details />
      <Footer/>
    </div>
  );
};

const container: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}
export default Officebearers;
