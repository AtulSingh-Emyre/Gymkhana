import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BootstrapTable from 'react-bootstrap-table-next';


const Culturalcouncil: React.FC = () => {

  const columns = [
    {
      dataField: 'id',
      text: '#'
    },{
    dataField: 'clubname',
    text: 'Cultural Clubs'
  }, {
    dataField: 'secyname',
    text: 'Club Secretary'
  }, {
    dataField: 'memblink',
    text: 'Club Members',
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
      <h1>Cultural Council</h1>
      <BootstrapTable keyField='id' data={products} columns={ columns } />
      <Footer />
    </>
  );
};

export default Culturalcouncil;
