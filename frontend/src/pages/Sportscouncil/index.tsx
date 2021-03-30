import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Header from '../../SportsCouncilComponents/Header/index';
import './style.css';
import Homestyle from '../../SportsCouncilComponents/Home/index';
import {Card, Button} from 'react-bootstrap';
import Footer from '../../components/Footer/index';
import logo from '../../assets/Sports Council/basketball.jpg'


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
      <h1>Clubs</h1>

      </div>
    

    </div>
    
    {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
<Footer/>
    </div>
   
  

  );

};

export default Sportscouncil;