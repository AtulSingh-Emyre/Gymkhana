import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Container, } from 'react-bootstrap';
import logo from "../../assets/logo.png";
import Example from '../Modal';

const Header = () => (
  <Navbar
    expand="lg"
    collapseOnSelect
    fixed={'top'}
    // className = {'navbar-fixed-top'}
    style={{
      position: 'sticky',
      top: 0,
      backgroundColor: '#FF6F00',
      paddingLeft: '2%',
      paddingRight: '2%',
      width: '100%'
    }}
  >
    <img src={logo} style={{ maxWidth: '60px' }} />
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
        <Nav.Link href="/" style={textCol} > HOME</Nav.Link>
        <Nav.Link href="/office" style={textCol}>OFFICE BEARERS</Nav.Link>
        <NavDropdown title="COUNCILS" id="basic-nav-dropdown" style={textCol}>
          <NavDropdown.Item href="/technical">TECHNICAL COUNCILS</NavDropdown.Item>
          <NavDropdown.Item href="/cultural">CULTURAL COUNCILS</NavDropdown.Item>
          <NavDropdown.Item href="/sports">SPORTS COUNCILS</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/notices" style={textCol}>NOTICES</Nav.Link>
        <Nav.Link href="/calendar" style={textCol}>CALENDAR</Nav.Link>
        <Nav.Link href="#" style={textCol}><Example /></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const textCol: React.CSSProperties = {
  color: 'white',
  height: '40px',
  margin: 'auto'
}
export default Header;
