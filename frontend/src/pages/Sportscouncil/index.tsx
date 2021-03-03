import React, { useState, useEffect } from 'react';
import Carouselcomp from '../../components/Carousel';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logo from '../../assets/interiitsmeet.jpg'
import Clubsndetails from '../../components/Clubsndetails'


const Sportscouncil: React.FC = () => {
  return (
    <>
      <Header />
      <Carouselcomp images={{image1:'../../assets/interiitsmeet.jpg', gsAcad:"hello"}}/>
      <Clubsndetails  
      council={{councilname:"Sports"}} 
      club1={{clubname:"Tennis Club",clubsec:"Huzaif Barkati"}} 
      club2={{clubname:"Table Tennis Club",clubsec:"Shivaram"}} 
      club3={{clubname:"",clubsec:""}} 
      
      
      />
      <Footer />
    </>
  );
};

export default Sportscouncil;
