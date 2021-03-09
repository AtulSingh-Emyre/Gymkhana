import React, { useState, useEffect } from 'react';
import Clubsinfo from '../../components/Clubsinfo';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BootstrapTable from 'react-bootstrap-table-next';
import clubdata from '../../assets/clubdetails.json';
import Carouselcomp from '../../components/Carousel';
import Container from 'react-bootstrap/Container';
import { useMediaQuery } from 'react-responsive';
const logo = require('../../assets/interiitsmeet.jpg');
const Culturalcouncil: React.FC = () => {
  const slimScreen = useMediaQuery({query:'(max-device-width: 900px)'})
  const columns = [
     {
      dataField: 'clubname',
      text: 'Cultural Clubs'
    }, {
      dataField: 'secyname',
      text: 'Club Secretary'
    }, {
      dataField: 'Contactdetails',
      text: 'Contact'
    },
  ];
  const smallScreenCols = [
    {
      dataField: 'clubname',
      text: 'Cultural Clubs'
    }, {
      dataField: 'secyname',
      text: 'Club Secretary'
    }, {
      dataField: 'Contactdetails',
      text: 'Contact'
    },
  ]
  return (
    <>
      <Header />

      <Carouselcomp images={{
        image1: logo, title1: "", caption1: "hello",
        image2: logo, title2: "", caption2: "",
        image3: logo, title3: "", caption3: "",
      }} />
      <br />
      <Container style={{ padding: '10px' }}>
        <div>
          <h3 style={{ textDecoration: 'underline' }}>About</h3>
          <p style={{ padding: '2px', margin: '3px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </Container>
      <hr />
      <Clubsinfo club={clubdata.cultural} />
      <hr />
      <h3 style={{ textDecoration: 'underline', textAlign: 'center' }}>Club Details</h3>
       <BootstrapTable keyField='id' data={clubdata.cultural} columns={slimScreen? smallScreenCols : columns} />
      <Footer />
    </>
  );
};

export default Culturalcouncil;
