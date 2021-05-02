import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import React, { useState } from 'react';
import { Nav, NavDropdown} from 'react-bootstrap';
import logo from "../../assets/iitdhlogo.png";
import Example from '../../components/Modal';
import GForm from '../GrievanceForm';
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
            <Nav.Link href="#" style={textCol} className={'activeHover'}><GForm/></Nav.Link>
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
