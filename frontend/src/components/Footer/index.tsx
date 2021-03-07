import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, } from "mdbreact";
import './style.css';
import SocialButtonsPage from  '../socialmediaicons';

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
          <MDBCol md="4">
            <h5 className="title">Quick Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title" style={{marginLeft:'13px'}}>Our Handles</h5>
            <SocialButtonsPage />
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