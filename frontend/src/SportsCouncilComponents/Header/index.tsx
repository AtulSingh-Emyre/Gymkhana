import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import Example from '../../components/Modal';
import logo from "../../assets/iitdhlogo.png";
import './style.css';
const SportsHeader: React.FC = () => {
  const [collapseID, setcollapseID] = useState(false);
  const toggleCollapse = () => {
    setcollapseID(!collapseID);
  }
  return (
    <div>
        <MDBNavbar
          // variant='dark'
          // expand="lg"
          // collapseOnSelect
          scrolling
          fixed={'top'}
          dark 
          className={'CultHeader'}
          expand="md"
          style={{...st}}
        >
          <a href="/" > 
          <img src={logo} style={{ maxWidth: '50px', maxHeight:50 }} />
          </a>
          <MDBNavbarToggler
              onClick={toggleCollapse}
              
          />
          <MDBCollapse id='navbarCollapse' className={'collapse'} isOpen={collapseID} navbar>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"> */}
            {/* <Nav className="ml-auto" style={{ marginTop: 'auto', marginBottom: 'auto' }} defaultActiveKey={'/'} > */}
            <MDBNavbarNav right>
            <Nav.Link href="#feeds" className={'activeHover'} style={textCol}>FEEDS</Nav.Link>
              <Nav.Link href="#clubs" style={textCol} className={'activeHover'}>CLUBS</Nav.Link>
              <Nav.Link href="#footer" style={textCol} className={'activeHover'}>CONTACT US</Nav.Link>
              </MDBNavbarNav>
            {/* </Nav> */}
            </MDBCollapse>
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