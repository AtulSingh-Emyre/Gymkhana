import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carouselcomp from '../../components/Carousel';
import BootstrapTable from 'react-bootstrap-table-next';


const Technicalcouncil: React.FC = () => {

  const columns = [
    {
      dataField: 'id',
      text: '#'
    },{
    dataField: 'clubname',
    text: 'Technical Clubs'
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
      <h1>Technical Council</h1>
      <BootstrapTable keyField='id' data={products} columns={ columns } />
      <Footer />
    </>
  );
};

export default Technicalcouncil;
