import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Container, } from 'react-bootstrap';
import logo from "../../assets/logo.png";
import Example from '../Modal';

const Header = () => (
  <Navbar  
  expand="lg" 
  collapseOnSelect
  fixed = {'top'}
  // className = {'navbar-fixed-top'}
  style = {{
    position:'sticky',
    top: 0,
    backgroundColor:'aqua', 
    paddingLeft:'2%', 
    paddingRight:'2%', 
    width:'100%'}}
  >
    <img src={logo} style={{ maxWidth:'60px'}} />
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/"  >HOME</Nav.Link>
        <Nav.Link href="/office">OFFICE BEARERS</Nav.Link>
        <NavDropdown title="COUNCILS" id="basic-nav-dropdown">
          <NavDropdown.Item href="/technical">TECHNICAL COUNCILS</NavDropdown.Item>
          <NavDropdown.Item href="/cultural">CULTURAL COUNCILS</NavDropdown.Item>
          <NavDropdown.Item href="/sports">SPORTS COUNCILS</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/notices">NOTICES</Nav.Link>
        <Nav.Link href="/calendar">CALENDAR</Nav.Link>
        <Nav.Link href="#"><Example /></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
