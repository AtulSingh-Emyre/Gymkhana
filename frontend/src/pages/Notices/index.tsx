import React, { useState, useEffect } from 'react';
import Card from '../../components/NoticesTable';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Notices: React.FC = () => {
  return (
    <>
    <Header />
      <Card/>
      <Footer />
    </>
  );
};

export default Notices;
