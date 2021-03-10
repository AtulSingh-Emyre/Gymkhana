import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, } from "mdbreact";
import './style.css';
import SocialButtonsPage from  '../socialmediaicons';
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4 " >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" >
            <h5 className="title">Contact Us</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="3" xs='10' >
            <h5 className="title">Quick Links</h5>
            <Container style={{paddingBottom:10}}>
              <div><a href="#!">Link 1</a></div>
              <div><a href="#!">Link 2</a></div>
              <div><a href="#!">Link 3</a></div>
            </Container>
          </MDBCol>
          <MDBCol md="3">
            <div style={{ margin:'auto', alignItems:'center', width:'100%', height:'100%'}}>
            <h5 className="title" style={{margin:'auto'}}>Our Handles</h5>
            <div style={{ margin:'auto', alignItems:'center'}}>
            <SocialButtonsPage />
            </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.iitdh.ac.in"> IIT Dharwad </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;