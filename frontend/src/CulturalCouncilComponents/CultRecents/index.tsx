import React, { useState } from "react";
import { Nav, Dropdown} from 'react-bootstrap';
import './styles.css';

const DropdownPage = () => {

    const [bg, setbg] = useState(false)

  return (
    <Dropdown>
        <Dropdown.Toggle variant="none" title="RECENT EVENTS" id="dropdown-basic" onMouseEnter={() => setbg(!bg)} onMouseLeave={() => setbg(!bg)} style={{background:bg?'rgba(138, 0, 62, 0.1)':'#FFFFFF', color:'#8A003E', boxShadow:'none', borderRadius:'10px'}}><strong>RECENT EVENTS</strong></Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href='#' style={{color:'#DF0054'}}>EVENT 1</Dropdown.Item>
            <Dropdown.Item href='#' style={{color:'#DF0054'}}>EVENT 2</Dropdown.Item>
            <Dropdown.Item href='#' style={{color:'#DF0054'}}>EVENT 3</Dropdown.Item>
            <Dropdown.Item href='#' style={{color:'#DF0054'}}>EVENT 4</Dropdown.Item>
            <Dropdown.Item href='#' style={{color:'#DF0054'}}>EVENT 5</Dropdown.Item>
            <Dropdown.Item href='#' style={{color:'#DF0054'}}>EVENT 6</Dropdown.Item>
            <Dropdown.Item href='#' style={{color:'#DF0054'}}>EVENT 7</Dropdown.Item>
            <Dropdown.Item href='#' style={{color:'#DF0054'}}>EVENT 8</Dropdown.Item>
            <Dropdown.Item href='#' style={{color:'#DF0054'}}>EVENT 9</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownPage;