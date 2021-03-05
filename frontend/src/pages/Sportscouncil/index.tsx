import React, { useState, useEffect } from 'react';
import Carouselcomp from '../../components/Carousel';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BootstrapTable from 'react-bootstrap-table-next';
import clubdata from '../../assets/clubdetails.json'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.css';

const logo =  require('../../assets/interiitsmeet.jpg');
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

  return (
    <>
      <Header />
      
      <h1>Sports Council</h1>
      <Carouselcomp images={{
        image1:logo, title1: "", caption1:"hello",
        image2:"", title2: "", caption2:"",
        image3:"",title3: "",  caption3:"", }}/>
        <br/>
        <Jumbotron className='rounded-pill'>
      <div>
        <h3>About</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      </Jumbotron>
      <BootstrapTable keyField='id' data={clubdata.sports} columns={ columns } />
      <Footer />
    </>
  );
};

export default Sportscouncil;
