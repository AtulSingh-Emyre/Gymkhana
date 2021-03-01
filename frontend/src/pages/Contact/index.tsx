import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';



const Contact: React.FC = () => {
  return (
    <>
    <Header />
    <Input title="Contact Form"/>
      <Footer />
    </>
  );
};

export default Contact;
