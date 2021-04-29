import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import Example from '../../components/Modal';
import logo from "../../assets/iitdhlogo.png";
import './style.css';
const SportsHeader: React.FC = () => {
  return (
    <div style={{maxHeight:'30%'}}>
            <MDBNavbar fixed={'top'} dark expand='md' className={'CultHeader navbarTech'} style={{...st}}>
                <MDBNavbarNav left>
                    <a href="/" > 
                        <img src={logo} style={{ maxWidth: '45px', maxHeight:'45px', marginLeft:'10px' }} />
                    </a>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <Nav.Link href="#feeds" className={'activeHover'} style={textCol}>FEEDS</Nav.Link>
                  <Nav.Link href="#clubs" style={textCol} className={'activeHover'}>CLUBS</Nav.Link>
                  <Nav.Link href="#footer" style={textCol} className={'activeHover'}>CONTACT US</Nav.Link>
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