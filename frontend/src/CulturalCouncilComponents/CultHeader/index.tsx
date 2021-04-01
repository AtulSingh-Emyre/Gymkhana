import React, { useState } from 'react';
import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import { Nav, NavDropdown} from 'react-bootstrap';
import logo from "../../assets/iitdhlogo.png";
import CultRecents from "../../CulturalCouncilComponents/CultRecents";

function CultHeader() {

    return (
        <div>
            <MDBNavbar fixed={'top'} dark expand='md' style={{...st}}>
                <MDBNavbarNav left>
                    <a href="/" > 
                        <img src={logo} style={{ maxWidth: '50px', maxHeight:50, marginLeft:'10px', marginTop:'10px' }} />
                    </a>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <CultRecents />
                </MDBNavbarNav>
            </MDBNavbar>
        </div>
    )
}

const st : React.CSSProperties = {
    boxShadow: '0 0 0 0',
    position: 'sticky',
}

export default CultHeader;