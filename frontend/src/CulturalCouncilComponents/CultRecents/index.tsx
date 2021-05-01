import React, { useState } from "react";
import { Nav, Dropdown, NavDropdown} from 'react-bootstrap';
import {MDBNav} from 'mdbreact';
import './styles.css';

const CultRecents = () => {
  return (
      <NavDropdown 
      title="RECENT EVENTS" 
      id="basic-nav-dropdown" 
      style={{...st, backgroundColor: '#880e4f'}}
      renderMenuOnMount={true}>
          <NavDropdown.Item href="https://drive.google.com/file/d/1j5CG1Vjtp3ZLpUEMDqXpKkUPRGPKC10b/view" style={{color:'#DF0054'}}>EVENT 1</NavDropdown.Item>
          <NavDropdown.Item href="https://drive.google.com/file/d/1j5CG1Vjtp3ZLpUEMDqXpKkUPRGPKC10b/view" style={{color:'#DF0054'}}>EVENT 2</NavDropdown.Item>
          <NavDropdown.Item href="https://drive.google.com/file/d/1j5CG1Vjtp3ZLpUEMDqXpKkUPRGPKC10b/view" style={{color:'#DF0054'}}>EVENT 3</NavDropdown.Item>
          <NavDropdown.Item href="https://drive.google.com/file/d/1j5CG1Vjtp3ZLpUEMDqXpKkUPRGPKC10b/view" style={{color:'#DF0054'}}>EVENT 4</NavDropdown.Item>
      </NavDropdown>
  );
}

const st : React.CSSProperties = {
  height: '40px',
  margin: 'auto',
  fontSize: '8',
  fontWeight: 'bolder',
  borderRadius: '5px'
}

export default CultRecents;