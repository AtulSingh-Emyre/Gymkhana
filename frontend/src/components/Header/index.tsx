import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler } from 'mdbreact';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-scroll";

import logo from "../../assets/iitdhlogoLight.png";
import { styleSheet } from './styles';
import './style.css';

interface IProps {
  active? : {
    home? : boolean,
    office? : boolean,
    council? : boolean,
    notice? : boolean,
    calendar? : boolean
  }
}

const Header: React.FC<IProps> = (props) => {
  const [collapseID, setcollapseID] = useState(false);
  const toggleCollapse = () => {
    setcollapseID(!collapseID);
  }
  const overlay = <div id='sidenav-overlay' style={styleSheet.headerContainer} onClick={toggleCollapse}/>

  return (
    <div style={styleSheet.fullWidth}>
      <MDBNavbar collapseOnSelect scrolling fixed={'top'} dark  expand="md" style={styleSheet.navbar}>
        <a href="/" > 
          <img src={logo} alt={'loading...'} style={styleSheet.logo}/>
        </a>
        <MDBNavbarToggler onClick={toggleCollapse}/>
        <MDBCollapse id='navbarCollapse' className={'collapse'} isOpen={collapseID} navbar>
          <MDBNavbarNav right>
            <Nav.Link className={'activeHover'}  style={styleSheet.textCol}><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>ABOUT</Link></Nav.Link>
            <Nav.Link style={styleSheet.textCol} className={'activeHover'}><Link to="councils" spy={true} smooth={true} offset={-100} duration={500}>COUNCILS</Link></Nav.Link>
            <Nav.Link className={'activeHover'} style={styleSheet.textCol}><Link to="recentActs" spy={true} smooth={true} offset={-100} duration={500}>RECENT ACTIVITIES</Link></Nav.Link>
            <Nav.Link style={styleSheet.textCol} className={'activeHover'}><Link to="secretaries" spy={true} smooth={true} offset={-100} duration={500}>SECRETARIES </Link></Nav.Link>
            <Nav.Link style={styleSheet.textCol} className={'activeHover'}><Link to="gallery" spy={true} smooth={true} offset={-100} duration={500}>GALLERY</Link></Nav.Link>
            <Nav.Link style={styleSheet.textCol} className={'activeHover'}><Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>CONTACT</Link></Nav.Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      {collapseID && overlay}
    </div>
  );
}

export default Header;
