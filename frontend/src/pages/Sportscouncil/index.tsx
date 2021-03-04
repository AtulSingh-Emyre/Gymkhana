import React, { useState, useEffect } from 'react';
import Carouselcomp from '../../components/Carousel';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logo from '../../assets/interiitsmeet.jpg'
import { JsonToTable } from "react-json-to-table";

import BootstrapTable from 'react-bootstrap-table-next';

const Sportscouncil: React.FC = () => {

const columns = [
  {
    dataField: 'id',
    text: '#'
  },{
  dataField: 'clubname',
  text: 'Sports Clubs'
}, {
  dataField: 'secyname',
  text: 'Club Secretary'
}, {
  dataField: 'memblink',
  text: 'Club Members'
},
 ];
const products = [
  {
    id: "1",
    clubname: "Tennis",
    secyname:  "Huzaif",
    memblink: "google",
  }
];
  return (
    <>
      <Header />
      <h1>Sports Council</h1>
      <Carouselcomp images={{image1:'../../assets/interiitsmeet.jpg', gsAcad:"hello"}}/>
      
      
      <BootstrapTable keyField='id' data={products} columns={ columns } />
      <Footer />
    </>
  );
};

export default Sportscouncil;
