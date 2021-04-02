import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Jumbotron } from 'react-bootstrap';
import Header from '../../SportsCouncilComponents/Header/index';
import './style.css';
import Homestyle from '../../SportsCouncilComponents/Home/index';
import {Card, Button} from 'react-bootstrap';
import Footer from '../../SportsCouncilComponents/Footer/index';
import logo from '../../assets/Sports Council/basketball.jpg'
import ClubsImages from '../../SportsCouncilComponents/Clubs Images/index';
import Cards from '../../SportsCouncilComponents/Cards/index';

const Sportscouncil: React.FC = () => {
  return (
    <div className="mainhome">
    <Header/>
    <div className='container maintextonpage'>
    <h1>Sports Club</h1>
    {/* <img src={logo}  /> */}
    </div>
    
    <div>
    <Homestyle/>

    </div>
    <div className="clubsection">
      <div className='container'>
      <h1>Feed</h1>
      <ClubsImages/>
      </div>
    

    </div>
    <div className='container'>
    {/* <Jumbotron> */}
    <div >
      <br/>
      <br/>
      <h1>Clubs</h1>
      <Cards/>
    </div>
    {/* </Jumbotron> */}
    </div>
    
<Footer/>
    </div>
   
  

  );

};

export default Sportscouncil;