import React, { useState } from 'react';
import { Button, Navbar, Nav, NavDropdown, Container, } from 'react-bootstrap';
import logo from "../../assets/iitdhlogo.png";
import Example from '../Modal';
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


const Header: React.FC<IProps> = (props) => 
{
  const [isTop, setisTop] = useState(true);
  const listener = document.addEventListener('scroll', e => {
    var scrolled = document.scrollingElement!.scrollTop;
    if (scrolled >= 10) {
            setisTop(false);
        } else {
            setisTop(true);
      }
    });

    return (
      <Navbar
        variant='dark'
        expand="lg"
        collapseOnSelect
        fixed={'top'}
        className = {props.active?.home?  !isTop?'navbartop':'' : 'navbartop'}
        style={{
          // position: 'sticky',
          top: 0,
          // height: 60,
          // backgroundColor: '#FF6F00',
          paddingLeft: '2%',
          paddingRight: '2%',
          width: '100%'
        }}
      >
        <a href="/" > 
        <img src={logo} style={{ maxWidth: '50px', maxHeight:50 }} />
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={{ marginTop: 'auto', marginBottom: 'auto' }} defaultActiveKey={'/'} >
            <Nav.Link href="/"  
            className={'activeHover'}  style={textCol}> HOME</Nav.Link>
            <Nav.Link href="/office" className={'activeHover'} style={textCol}>OFFICE BEARERS</Nav.Link>
            <NavDropdown title="COUNCILS" id="basic-nav-dropdown" style={textCol} className={'activeHover'} renderMenuOnMount={true}>
              <NavDropdown.Item href="/technical">TECHNICAL COUNCILS</NavDropdown.Item>
              <NavDropdown.Item href="/cultural">CULTURAL COUNCILS</NavDropdown.Item>
              <NavDropdown.Item href="/sports">SPORTS COUNCILS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/notices" style={textCol} className={'activeHover'}>NOTICES</Nav.Link>
            <Nav.Link href="/calendar" style={textCol} className={'activeHover'}>CALENDAR</Nav.Link>
            <Nav.Link href="#" style={textCol} className={'activeHover'}><Example /></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
  }
const textCol: React.CSSProperties = {
  color: 'white',
  height: '40px',
  margin: 'auto',
  // backgroundColor: 'white'
}
export default Header;
