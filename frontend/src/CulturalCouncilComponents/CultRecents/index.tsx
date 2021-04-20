import React, { useState } from "react";
import { Nav, Dropdown, NavDropdown} from 'react-bootstrap';
import './styles.css';

const CultRecents = () => {

  const [bg, setbg] = useState(false);

  return (
      <NavDropdown 
      title="RECENT EVENTS" 
      id="basic-nav-dropdown" 
      style={{...st, backgroundColor: bg? 'rgba(138, 0, 62, 0.1)': '#ffffff'}} 
      onMouseEnter={() => setbg(true)}
      onMouseLeave={() => setbg(false)}
      renderMenuOnMount={true}>
          <NavDropdown.Item style={{color:'#DF0054'}}>EVENT 1</NavDropdown.Item>
          <NavDropdown.Item style={{color:'#DF0054'}}>EVENT 2</NavDropdown.Item>
          <NavDropdown.Item style={{color:'#DF0054'}}>EVENT 3</NavDropdown.Item>
          <NavDropdown.Item style={{color:'#DF0054'}}>EVENT 4</NavDropdown.Item>
          <NavDropdown.Item style={{color:'#DF0054'}}>EVENT 5</NavDropdown.Item>
          <NavDropdown.Item style={{color:'#DF0054'}}>EVENT 6</NavDropdown.Item>
          <NavDropdown.Item style={{color:'#DF0054'}}>EVENT 7</NavDropdown.Item>
          <NavDropdown.Item style={{color:'#DF0054'}}>EVENT 8</NavDropdown.Item>
      </NavDropdown>
  );
}

const st : React.CSSProperties = {
  color: '#8a003e',
  height: '40px',
  margin: 'auto',
  fontSize: '10',
  fontWeight: 'bolder',
  borderRadius: '5px'
}

export default CultRecents;