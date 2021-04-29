import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Jumbotron } from 'react-bootstrap';
import Header from '../../SportsCouncilComponents/Header/index';
import './style.css';
import Homestyle from '../../SportsCouncilComponents/Home/index';
import {Card, Button} from 'react-bootstrap';
import Footer from '../../SportsCouncilComponents/Footer/index';
import logo from '../../assets/Sports Council/basketball.jpg'
import ClubsImages from '../../SportsCouncilComponents/Clubs Images';
import Deck from '../../SportsCouncilComponents/Cards';
import { relative } from 'node:path';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';

const Sportscouncil = () => {
  return (
    <div className="mainhome">
    <Header/>
    <div style={{position: 'relative', zIndex:3}}>
      <div className='container maintextonpage' style={{marginLeft:'15%'}}>
      <h1><strong>Sports Club IIT Dharwad</strong></h1>
      <h4>Khela Hobe xD.</h4>
      <a href="#feeds" className="godownbutton" style={{marginLeft:'18%', zIndex:3}}><i className="fa fa-angle-down" aria-hidden="true"></i></a>
      </div>
    <Homestyle/>
    </div>
    <h1 className="container" style={{color: '#1f4baa', fontWeight: 'bolder'}}>Feed</h1>
    <br/>
    <MDBContainer>    
      <ClubsImages/>
      <br/><br/><br/>
      <MDBRow className='container clubs' style={{height:'auto', width:'auto', marginLeft:'auto', marginRight:'auto'}}>
      {/* <Jumbotron> */}
        <div className="container">
          <h1 style={{color: '#1f4baa', fontWeight: 'bolder'}}>Clubs</h1>
          <div>
            <Deck />
          </div>
        </div>
      {/* </Jumbotron> */}
      </MDBRow>
    </MDBContainer>
    <div className='footer' id="footer">
      <Footer/>
    </div>
    </div>
  );
};

const smoothScroll : React.CSSProperties = {
  scrollBehavior: 'smooth',
  msScrollTranslation: 'vertical-to-horizontal'
}

export default Sportscouncil;