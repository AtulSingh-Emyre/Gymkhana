import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import React, { useEffect, useRef, useState } from 'react';
import { Nav, NavDropdown} from 'react-bootstrap';
import logo from "../../assets/iitdhlogo.png";
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
  
  const goClubsOnPress = () => {  
    const offsetTop  = document.getElementById("clubsTech")!.offsetTop;
    window.scrollTo({
      top: offsetTop-100, 
      behavior: "smooth"
    });
  }
  const goEventsOnPress = () => {  
    const offsetTop  = document.getElementById("eventsTech")!.offsetTop;
    window.scrollTo({
      top: offsetTop-100, 
      behavior: "smooth"
    });
  }
  const goContactOnPress = () => {  
    const offsetTop  = document.getElementById("contactTech")!.offsetTop;
    window.scrollTo({
      top: offsetTop-100, 
      behavior: "smooth"
    });
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
        className={'techHeader navbarTech'}
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
        <MDBNavbarToggler onClick={toggleCollapse}/>
        <MDBCollapse id='navbarCollapse' className={'collapseTech'} isOpen={collapseID} navbar>
          <MDBNavbarNav right>
          <Nav.Link onClick={goClubsOnPress} className={'activeHover'}  style={textCol}> CLUBS</Nav.Link>
          <Nav.Link onClick={goEventsOnPress} className={'activeHover'}  style={textCol}> EVENTS</Nav.Link>
            <Nav.Link href="https://parsec.iitdh.ac.in/" style={textCol} className={'activeHover'}>FESTS</Nav.Link>
            <Nav.Link onClick={goContactOnPress} style={textCol} className={'activeHover'}>CONTACT</Nav.Link>
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
