import React from "react";
import { Container } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import SocialButtonsPage from '../socialmediaicons';
import { styleSheet } from './styles';
import './style.css';


const Footer = () => {

  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4 padMarF ">
      <div className='container' id={'contact'}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6" >
              <div style={styleSheet.position}>
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                  Contact
                </h5>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={styleSheet.w60} />
              </div>
              <p>
                <i className="fa fa-home mr-3" /> Indian Institute of Technology Dharwad, Karnataka, India - 580011
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> pro@iitdh.ac.in
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> +91 836 2212 839
              </p>
            </MDBCol>
            <MDBCol md="3" xs='10' >
              <h5 className="title">QUICK LINKS</h5>
              <br />
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={styleSheet.w60} />
              <Container style={styleSheet.pb10}>
                <div>
                  <a href="https://www.iitdh.ac.in/">IIT Dharwad</a>
                </div>
                <div>
                  <a href="https://parsec.iitdh.ac.in/">Parsec</a>
                </div>
                <div>
                  <a href="https://smp.iitdh.ac.in/">SMP</a>
                </div>
                <div>
                  <a href="https://cdc.iitdh.ac.in/">CDC</a>
                </div>
                <div>
                  <a href="https://oss2019.github.io/">OSS</a>
                </div>
                <div>
                  <a href="https://www.iitdh.ac.in/iic/">IIC</a>
                </div>
              </Container>
            </MDBCol>
            <MDBCol md="3">
              <div style={styleSheet.col}>
                <h5 className="title" style={styleSheet.ma}>OUR HANDLES</h5>
                <br />
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={styleSheet.w60} />
                <div style={styleSheet.mac}>
                  <SocialButtonsPage />
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.iitdh.ac.in"> IIT Dharwad </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;