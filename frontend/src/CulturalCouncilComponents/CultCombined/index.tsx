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
            <Gallery />
                <MDBContainer fluid className="text-center">
                        <MDBRow className="info-div" style={{width:'auto', marginLeft:'5%', marginRight:'5%', marginTop:'5%'}}>
                            <MDBCol className="text-md-left" md="6" style={{width:'75%'}}>
                                <h3 style={{color:'#8A003E'}}><strong>CULTURAL COUNCIL</strong></h3>
                                <p className="para" style={{color:'#DF0054', fontWeight:'bolder'}}> 
                                    Welcome to the CULTURAL COUNCIL! Here we do a lot of cool stuff and our main motive is to enable 
                                    students to pursue their hobbies,interests apart from the usual academics. Platform for various
                                    events like Music,Art,Dance etc is open welcoming students to showcase their hidden talents!
                                </p>
                            </MDBCol>
                            <MDBCol className="text-md-right" md="6" xs='10' style={{width: '15%'}}>
                                <CultClubs />
                            </MDBCol>
                        </MDBRow>
                </MDBContainer>
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
