import React from 'react'
import CultHeader from '../../CulturalCouncilComponents/CultHeader';
import Gallery from '../../CulturalCouncilComponents/Gallery';
import CultClubs from '../../CulturalCouncilComponents/CultClubs';
import CultFooter from '../CultFooter';
import styled, { keyframes } from 'styled-components';
import {fadeInLeft} from 'react-animations';
import { useMediaQuery } from 'react-responsive';
import './styles.css'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
 
const Animation = keyframes`${fadeInLeft}`;
const noAnimation = keyframes`${false}`;

function Compiled() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 770px)' });
    const BouncyDiv = styled.div`
    animation: 1s ${isTabletOrMobile? noAnimation : Animation};
    `;
    const card:React.CSSProperties = {
        width:'90%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        borderRadius:'25px',
        backgroundColor:'#FFFFFF',
        boxShadow:'0 0 10px 5px rgba(1, 0, 0, 0.2)',
        overflow:'hidden'
    }
    return (
        <BouncyDiv>
            <div className='MainCard' style={isTabletOrMobile?full:card}>
            <CultHeader />
            <div style={{display:isTabletOrMobile?'initial':'none'}}><br/><br/><br/></div>
            <Gallery />
            <CultClubs />
            <div className="footer" style={{width:'auto', marginLeft:'-10px', marginRight:'-10px', marginBottom:'-1%', alignItems:'center'}}>
                <CultFooter />
            </div>
            </div>
        </BouncyDiv>
    )
}

const full: React.CSSProperties = {
    width: '100%',
    backgroundColor:'#FFFFFF',
    overflow:'hidden'
}

export default Compiled
