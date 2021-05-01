import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import Example from '../../components/Modal';
import logo from "../../assets/iitdhlogo.png";
import Events from '../Events';
import SportsMeet from '../SportsMeet';
import './style.css';

const SportsHeader: React.FC = () => {
  return (
    <div style={{maxHeight:'30%'}}>
            <MDBNavbar fixed={'top'} dark expand='md' className={'SportsHeader navbarSports'} style={{...st}}>
                <MDBNavbarNav left>
                    <a href="/" > 
                        <img src={logo} style={{ maxWidth: '45px', maxHeight:'45px', marginLeft:'10px' }} />
                    </a>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <Nav.Link className={'activeHover'} style={textCol}><Events/></Nav.Link>
                  <Nav.Link style={textCol} className={'activeHover'}><SportsMeet/></Nav.Link>
                  <Nav.Link href="#footer" style={textCol} className={'activeHover'}><button style={{backgroundColor: 'transparent', border: 'none', color: 'white'}}>CONTACT US</button></Nav.Link>
                </MDBNavbarNav>
            </MDBNavbar>
        </div>
  );
};

const textCol: React.CSSProperties = {
  color: 'white',
  height: '40px',
  margin: 'auto',
  fontSize: '10'
  // backgroundColor: 'white'
}

const st: React.CSSProperties = {
  height: 'auto'
}

export default SportsHeader;