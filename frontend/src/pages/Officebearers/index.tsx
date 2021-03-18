import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Details from '../../components/CouncilMemberDetail';
import PreviousCouncilMemsContainer from '../../components/PreviousCouncilMemsContainer';
import { Jumbotron } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBMask, MDBView } from 'mdbreact';
import './index.css';
const Officebearers: React.FC = () => {
  // making the page responsive:
  return (
    <div style={container}>
      <Header active={{office:true}}/>
      <MDBCard reverse className='detailsContainer'>
      <Jumbotron style={{backgroundColor:'black', width:'100%', marginBottom:0, paddingBottom:0}}>
        <Jumbotron style={{width:'100%', height:'50vh', backgroundColor:'black', color:'white', padding:0, margin:0}}>    
        </Jumbotron>
        <MDBCardBody className='details'>
        <Details />
        </MDBCardBody>
      </Jumbotron>
      </MDBCard>
      <PreviousCouncilMemsContainer/>
      <Footer />
      </div>
  );
};

const container: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  // marginTop:50
}
export default Officebearers;
