import React from 'react'
import CultHeader from '../../CulturalCouncilComponents/CultHeader';
import Gallery from '../../CulturalCouncilComponents/Gallery';
import CultClubs from '../../CulturalCouncilComponents/CultClubs';
import CultFooter from '../CultFooter';
import styled, { keyframes } from 'styled-components';
import {fadeInLeft} from 'react-animations';
 
const Animation = keyframes`${fadeInLeft}`;
 
const BouncyDiv = styled.div`
  animation: 1s ${Animation};
`;

function Compiled() {
    return (
        <BouncyDiv>
            <div className='MainCard' style={{...card}}>
            <CultHeader />
            <Gallery />
                <div style={{width:'90%', height:'25%', marginLeft:'auto', marginTop:'-35px', marginRight:'auto'}}>
                    <div style={{width:'75%', marginRight:'auto', float:'left', position:'relative'}}>
                        <h3 style={{color:'#8A003E'}}><strong>CULTURAL COUNCIL</strong></h3>
                        <p style={{color:'#DF0054', fontWeight:'bolder'}}> 
                            Welcome to the CULTURAL COUNCIL! Here we do a lot of cool stuff and our main motive is to enable 
                            students to pursue their hobbies,interests apart from the usual academics. Platform for various
                            events like Music,Art,Dance etc is open welcoming students to showcase their hidden talents!
                        </p>
                    </div>
                    <div style={{width:'20%',  marginLeft:'auto', marginBottom:'0', float:'right', textAlign:'right'}}>
                        <CultClubs />
                    </div>
                </div>
                <div style={{width:'auto', position:'relative', marginTop:'-15px', marginLeft:'-10px', marginRight:'-10px'}}>
                    <CultFooter />
                </div>
            </div>
        </BouncyDiv>
    )
}

const card:React.CSSProperties = {
    width:'90%',
    height:'1150px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px',
    borderRadius:'25px',
    backgroundColor:'#FFFFFF',
    boxShadow:'0 0 10px 5px rgba(1, 0, 0, 0.2)',
    overflow:'hidden'
}

export default Compiled
