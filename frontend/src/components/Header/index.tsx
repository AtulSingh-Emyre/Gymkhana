import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import React, { useState } from 'react';
import { Nav, NavDropdown} from 'react-bootstrap';
import logo from "../../assets/iitdhlogoLight.png";
import Example from '../ContactForm';
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
      <div>
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
          <Nav.Link href="/" className={'activeHover'}  style={textCol}> HOME</Nav.Link>
          <Nav.Link href="/office" className={'activeHover'} style={textCol}>OFFICE BEARERS</Nav.Link>
          <NavDropdown title="COUNCILS" id="basic-nav-dropdown" style={textCol} className={'activeHover'} renderMenuOnMount={true}>
              <NavDropdown.Item href="/technical">TECHNICAL COUNCILS</NavDropdown.Item>
              {/* <NavDropdown.Item href="/cultural">CULTURAL COUNCILS</NavDropdown.Item>
              <NavDropdown.Item href="/sports">SPORTS COUNCILS</NavDropdown.Item>
              <NavDropdown.Item href="/hostel">HOSTEL COUNCILS</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/notices" style={textCol} className={'activeHover'}>NOTICES</Nav.Link>
            <Nav.Link href="/calendar" style={textCol} className={'activeHover'}>CALENDAR</Nav.Link>
            <Nav.Link href="#" style={textCol} className={'activeHover'}><Example /></Nav.Link>
            </MDBNavbarNav>
          {/* </Nav> */}
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
