import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Details from '../../components/CouncilMemberDetail';
import PreviousCouncilMemsContainer from '../../components/PreviousCouncilMemsContainer';
import { Container, Jumbotron } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBMask, MDBView } from 'mdbreact';
import './index.css';
const Officebearers: React.FC = () => {
  // making the page responsive:
  const [h, seth] = useState('0px');
  const first = false;
  if(first){  
    var child1 = document.querySelector(".child1");
    var child2 = document.querySelector(".child2");
    var childHeight = parseInt(window.getComputedStyle(child1!).height) * 8/4 + parseInt(window.getComputedStyle(child2!).height) + "px";
    seth(childHeight);
  }

  useEffect(() => {
    var child1 = document.querySelector(".child1");
    var child2 = document.querySelector(".child2");
    var childHeight = parseInt(window.getComputedStyle(child1!).height) * 5/4 + parseInt(window.getComputedStyle(child2!).height) + "px";
    seth(childHeight);
    return () => {
      
    };
  }, []);
  return (
    <div style={container}>
      <Header active={{office:true}}/>
      <div style={{width:'100%', 
      // height:'calc(inherit - 50px)',
      position:'relative', backgroundColor:'white', padding:0, marginBottom:0}}>
        <div style={{width:'100%', position:'relative', top:0, paddingTop:50, height:'500px', backgroundColor:'black', zIndex:2}} className={'child1'} >
          <Container >
            <strong> <b>
              <h1 style={{textAlign:'center', position:'relative', top:'150px', bottom:0, right:10, left:10, color:'white', fontFamily:'Arial Black'}}>OFFICE BEARERS</h1>
              </b> </strong>
          </Container>
        </div>
        <div style={{
          width:'80%', 
          position: 'relative', 
          backgroundColor:'white',
          // margin:'auto', 
          margin:'auto',
          marginTop:'-100px',
          zIndex:3, 
        }} className={'child2'}>
          <MDBCard >
          <Details />
          </MDBCard>
        </div>
      </div>

      {/* <MDBCard reverse className='detailsContainer'>
      <Jumbotron style={{backgroundColor:'black', width:'100%', marginBottom:0, paddingBottom:0}}>
        <Jumbotron style={{width:'100%', height:'50vh', backgroundColor:'black', color:'white', padding:0, margin:0}}>    
        </Jumbotron>
        <MDBCardBody className='details'>
        <Details />
        </MDBCardBody>
      </Jumbotron>
      </MDBCard> */}
      <div style={{ position:'relative', 
      // top:'-50px',
      backgroundColor:'white', width:'100%', padding:0, margin:0}}>
      <PreviousCouncilMemsContainer/>
      </div>
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
