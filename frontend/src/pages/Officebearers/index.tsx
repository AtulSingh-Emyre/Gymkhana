import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Details from '../../components/CouncilMemberDetail';



const Officebearers: React.FC = () => {
  return (
    <div style={container}>
      <div style={element}>
      <Header />
      <Details />
      <Footer />
      </div>
    </div>
  );
};

const container: React.CSSProperties = {
  display: 'flex'
}
const element : React.CSSProperties = {
  flex:1,
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center'
}
export default Officebearers;
