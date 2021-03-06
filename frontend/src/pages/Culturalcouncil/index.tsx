import React, { useState, useEffect } from 'react';
import Clubsinfo from '../../components/Clubsinfo';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BootstrapTable from 'react-bootstrap-table-next';
import clubdata from '../../assets/clubdetails.json';
import Carouselcomp from '../../components/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';

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
  
  return (
    <>
      <Header />
      <h1>Cultural Council</h1>
      <Carouselcomp images={{
        image1:"", title1: "", caption1:"hello",
        image2:"", title2: "", caption2:"",
        image3:"",title3: "",  caption3:"", }}/>
        <br/>
        <Jumbotron className='rounded-pill'>
        <div>
        <h3>About</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      </Jumbotron>
      <Clubsinfo club={{clubname:"cultural"}}/>
      <BootstrapTable keyField='id' data={clubdata.cultural} columns={ columns } />
      <Footer />
    </>
  );
};

export default Culturalcouncil;
