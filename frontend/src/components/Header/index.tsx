import React from 'react';
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


const Header: React.FC<IProps> = (props) => (
  <Navbar
    variant='dark'
    expand="lg"
    collapseOnSelect
    fixed={'top'}
    className = 'navbartop'
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
        <Nav.Link href="/" active={props.active?.home?props.active?.home:false } style={textCol} > HOME</Nav.Link>
        <Nav.Link href="/office" active={props.active?.office?props.active?.office:false} style={textCol}>OFFICE BEARERS</Nav.Link>
        <NavDropdown title="COUNCILS" id="basic-nav-dropdown" style={textCol} active={props.active?.council}>
          <NavDropdown.Item href="/technical">TECHNICAL COUNCILS</NavDropdown.Item>
          <NavDropdown.Item href="/cultural">CULTURAL COUNCILS</NavDropdown.Item>
          <NavDropdown.Item href="/sports">SPORTS COUNCILS</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/notices" style={textCol} active={props.active?.notice}>NOTICES</Nav.Link>
        <Nav.Link href="/calendar" style={textCol} active={props.active?.calendar}>CALENDAR</Nav.Link>
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
