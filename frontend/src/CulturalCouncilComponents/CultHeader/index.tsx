import React, { useState } from 'react';
import { MDBCollapse, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import { Nav, NavDropdown} from 'react-bootstrap';
import logo from "../../assets/iitdhlogo.png";
import CultRecents from "../../CulturalCouncilComponents/CultRecents";
import './styles.css';

function CultHeader() {

    return (
        <div style={{maxHeight:'30%'}}>
            <MDBNavbar fixed={'top'} dark expand='md' className={'CultHeader navbarTech'} style={{...st}}>
                <MDBNavbarNav left>
                    <a href="/" > 
                        <img src={logo} style={{ maxWidth: '45px', maxHeight:'45px', marginLeft:'10px' }} />
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
    height: 'auto'
}

export default CultHeader;