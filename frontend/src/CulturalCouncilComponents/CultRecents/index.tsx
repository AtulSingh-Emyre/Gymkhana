import React, { useState } from "react";
import { Nav, Dropdown} from 'react-bootstrap';
import './styles.css';

const DropdownPage = () => {

    const [bg, setbg] = useState(false)

  return (
    <Dropdown>
        <Dropdown.Toggle variant="none" title="RECENT EVENTS" id="dropdown-basic" onMouseEnter={() => setbg(!bg)} onMouseLeave={() => setbg(!bg)} style={{background:bg?'rgba(68, 44, 46, 0.15)':'#FFFFFF', color:'#442C2E', boxShadow:'none', borderRadius:'10px'}}><strong>RECENT EVENTS</strong></Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href='#'>EVENT 1</Dropdown.Item>
            <Dropdown.Item href='#'>EVENT 2</Dropdown.Item>
            <Dropdown.Item href='#'>EVENT 3</Dropdown.Item>
            <Dropdown.Item href='#'>EVENT 4</Dropdown.Item>
            <Dropdown.Item href='#'>EVENT 5</Dropdown.Item>
            <Dropdown.Item href='#'>EVENT 6</Dropdown.Item>
            <Dropdown.Item href='#'>EVENT 7</Dropdown.Item>
            <Dropdown.Item href='#'>EVENT 8</Dropdown.Item>
            <Dropdown.Item href='#'>EVENT 9</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownPage;