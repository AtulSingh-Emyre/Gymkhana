import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import React, { useEffect, useRef, useState } from 'react';
import { Nav, NavDropdown} from 'react-bootstrap';
import logo from "../../assets/iitdhlogo.png";
import Example from '../../components/Modal';
import './styles.css';

interface IProps {
  active? : {
    home? : boolean,
    office? : boolean,
    council? : boolean,
    notice? : boolean,
    calendar? : boolean
  }
}


const TechHeader: React.FC<IProps> = (props) => 
{
  const [collapseID, setcollapseID] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<any>(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current!.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', () => handleScroll);
    // };
  }, []);
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
      <div
        className={'sticky'} 
        ref={ref}
        style={{zIndex:55555}}  
      >
      <MDBNavbar
        collapseOnSelect
        scrolling
        dark 
        expand="md"
        style={{
          paddingLeft: '2%',
          paddingRight: '2%',
          width: '100%',
          position: 'sticky',
          top:0,
        }}
      >
        <a href="/" > 
        <img src={logo} style={{ maxWidth: '50px', maxHeight:50 }} />
        </a>
        <MDBNavbarToggler
            onClick={toggleCollapse}
            
        />
        <MDBCollapse id='navbarCollapse' className={'collapse'} isOpen={collapseID} navbar>
          <MDBNavbarNav right>
          <Nav.Link href="/" className={'activeHover'}  style={textCol}> HOME</Nav.Link>
          <Nav.Link href="/office" className={'activeHover'} style={textCol}>OFFICE BEARERS</Nav.Link>
          <NavDropdown title="COUNCILS" id="basic-nav-dropdown" style={textCol} className={'activeHover'} renderMenuOnMount={true}>
              <NavDropdown.Item href="/technical">TECHNICAL COUNCILS</NavDropdown.Item>
              <NavDropdown.Item href="/cultural">CULTURAL COUNCILS</NavDropdown.Item>
              <NavDropdown.Item href="/sports">SPORTS COUNCILS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/notices" style={textCol} className={'activeHover'}>NOTICES</Nav.Link>
            <Nav.Link href="/calendar" style={textCol} className={'activeHover'}>CALENDAR</Nav.Link>
            <Nav.Link href="#" style={textCol} className={'activeHover'}><Example /></Nav.Link>
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
export default TechHeader;
