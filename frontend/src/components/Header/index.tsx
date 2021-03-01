import React from 'react';
import { Button,Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';
import logo from "../../assets/logo.png";

const Header = () => (
<<<<<<< HEAD
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">IIT</Navbar.Brand>
=======
  <Navbar bg="light" expand="lg" >
  
  <img src={logo} style={{width:100, marginTop: -7}} />
  <Navbar.Brand href="#home">Indian Institute of Technology, Dharwad</Navbar.Brand>
>>>>>>> 6d0fb7a8a183d261f8777f55033049b5efc42c62
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" >
      <Nav.Link href="/">HOME</Nav.Link>
      <Nav.Link href="#link">OFFICE BEARERS</Nav.Link>
      <Nav.Link href="#link">COUNCILS</Nav.Link>
<<<<<<< HEAD
      <Nav.Link href="/calendar">CALENDAR</Nav.Link>
      <Nav.Link href="/notices">NOTICES</Nav.Link>
      <Nav.Link href="/contact">CONTACT</Nav.Link>
=======
      <Nav.Link href="#link">NOTICES</Nav.Link>
      <Nav.Link href="#link">STUDENT BODIES</Nav.Link>
      <Nav.Link href="#link">TEAM</Nav.Link>
      <Nav.Link href="#link">CONTACT</Nav.Link>
>>>>>>> 6d0fb7a8a183d261f8777f55033049b5efc42c62
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
);

export default Header;
