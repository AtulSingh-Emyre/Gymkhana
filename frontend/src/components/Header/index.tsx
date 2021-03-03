import React from 'react';
import { Button, Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import logo from "../../assets/logo.png";
import './style.css';

const Header = () => (
  <Navbar  expand="lg">
    
    <img src={logo} style={{ width: 70, marginTop: -7, marginLeft: 10 }} />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" >
        <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/office">OFFICE BEARERS</Nav.Link>
        <NavDropdown title="COUNCILS" id="basic-nav-dropdown">
          <NavDropdown.Item href="/technical">TECHNICAL COUNCILS</NavDropdown.Item>
          <NavDropdown.Item href="/cultural">CULTURAL COUNCILS</NavDropdown.Item>
          <NavDropdown.Item href="/sports">SPORTS COUNCILS</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/notices">NOTICES</Nav.Link>
        <Nav.Link href="#link">STUDENT BODIES</Nav.Link>
        <Nav.Link href="/calendar">CALENDAR</Nav.Link>
        <Nav.Link href="#link">TEAM</Nav.Link>
        <Nav.Link href="/contact">CONTACT</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Navbar>

);

export default Header;
