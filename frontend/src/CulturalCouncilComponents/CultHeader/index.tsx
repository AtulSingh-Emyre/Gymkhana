import React, { useState } from 'react';
import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import logo from "../../assets/iitdhlogo.png";

function CultHeader() {
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
            <MDBNavbar collapseOnSelect scrolling fixed={'top'} dark expand='md' style={{...st}}>
                <a href="/" > 
                    <img src={logo} style={{ maxWidth: '50px', maxHeight:50 }} />
                </a>
            </MDBNavbar>
                    {overlay}
        </div>
    )
}

const st : React.CSSProperties = {
    boxShadow: '0 0 1px 0'
}

export default CultHeader;