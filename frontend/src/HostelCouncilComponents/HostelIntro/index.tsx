import { MDBContainer } from 'mdbreact';
import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';
import './styles.css';

function HostelIntro() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })

    return (<>
        <div className="HostelIntro" style={{...beautify,  height: isTabletOrMobile? 'auto':'100%'}}>
            <div style={{alignItems: 'center', justifyContent: 'center', width: '60%'}}>
                    <div style={{width: '100%', height: '100%', borderRadius: '10px', textAlign: 'center'}}>
                        <h1 style={{color: '#FFA726', fontFamily: 'sans-serif'}}><strong>Hostel Council IIT Dharwad</strong></h1>
                        <h5 style={{color: '#FFA726', fontFamily: 'serif'}}>Welcome to our Anti-ragging Boredom-proof Hostels</h5>
                    </div>
            </div>
        </div>
    </>);
}

const beautify: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${require("../../assets/HostelBg.jpg")})`,
    opacity: '0.90',
}

export default HostelIntro
