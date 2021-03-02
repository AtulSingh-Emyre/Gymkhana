import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Details from '../../components/CouncilMemberDetail';



const Officebearers: React.FC = () => {
  return (
    <>
      <Header />
      <Details />
      <Footer />
    </>
  );
};

export default Officebearers;
