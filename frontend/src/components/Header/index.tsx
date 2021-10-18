import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler } from 'mdbreact';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import logo from "../../assets/iitdhlogoLight.png";
import './style.css';
import { Link } from "react-scroll";

interface IProps {
  active? : {
    home? : boolean,
    office? : boolean,
    council? : boolean,
    notice? : boolean,
    calendar? : boolean
  }
}




const Header: React.FC<IProps> = (props) => 
{
  const [collapseID, setcollapseID] = useState(false);
  const toggleCollapse = () => {
    setcollapseID(!collapseID);
  }
  const overlay = (
    <div
      id='sidenav-overlay'
      style={{ backgroundColor: 'transparent' }}
      onClick={toggleCollapse}
    />
  )

    return (
      <div style={{maxWidth:'100%'}}>
      <MDBNavbar
        // variant='dark'
        // expand="lg"
        collapseOnSelect
        scrolling
        fixed={'top'}
        // color="default-color" 
        dark 
        expand="md"
        style={{
          top: 0,
          paddingLeft: '2%',
          paddingRight: '2%',
          width: '100%'
        }}
      >
        <a href="/" > 
        <img src={logo} alt={'loading...'} style={{ maxWidth: '150px', maxHeight:50 }} />
        </a>
        <MDBNavbarToggler
            onClick={toggleCollapse}
            
        />
        <MDBCollapse id='navbarCollapse' className={'collapse'} isOpen={collapseID} navbar>
          <MDBNavbarNav right>
          <Nav.Link className={'activeHover'}  style={textCol}><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>ABOUT</Link></Nav.Link>
            <Nav.Link style={textCol} className={'activeHover'}><Link to="councils" spy={true} smooth={true} offset={-100} duration={500}>COUNCILS</Link></Nav.Link>
          <Nav.Link className={'activeHover'} style={textCol}><Link to="recentActs" spy={true} smooth={true} offset={-100} duration={500}>RECENT ACTIVITIES</Link></Nav.Link>
            <Nav.Link style={textCol} className={'activeHover'}><Link to="secretaries" spy={true} smooth={true} offset={-100} duration={500}>SECRETARIES </Link></Nav.Link>
            <Nav.Link style={textCol} className={'activeHover'}><Link to="gallery" spy={true} smooth={true} offset={-100} duration={500}>GALLERY</Link></Nav.Link>
            <Nav.Link style={textCol} className={'activeHover'}><Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>CONTACT</Link></Nav.Link>
            </MDBNavbarNav>
          </MDBCollapse>
      </MDBNavbar>
                  {collapseID && overlay}
</div>
    );
  }
const textCol: React.CSSProperties = {
  color: 'white',
  height: '40px',
  margin: 'auto',
  fontSize: '10'
  // backgroundColor: 'white'
}
export default Header;
