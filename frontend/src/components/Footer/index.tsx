import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import './style.css';
import SocialButtonsPage from '../socialmediaicons';
import { Container } from "react-bootstrap";
import { GrLocation } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";


const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4 padMarF ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" >
            <div style={{ position: 'sticky' }}>
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Contact
            </h5>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            </div>
            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
<<<<<<< HEAD
            <a href="https://goo.gl/maps/WZiRcratqas"><GrLocation style={{backgroundColor:'white'}} />   Indian Institute of Technology Dharwad, Karnataka, India-580011<br /></a>
            <GrMailOption color={'white'} style={{backgroundColor:'white'}} />  pro@iitdh.ac.in<br />
            <FiPhoneCall/>  +91 836 2212 839
=======
              <i className="fa fa-print mr-3" /> + 01 234 567 89
>>>>>>> ba0396e37e28c77c639755d77c9b597c7e2e99d4
            </p>
          </MDBCol>
          <MDBCol md="3" xs='10' >
            <h5 className="title">QUICK LINKS</h5>
            <br />
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <Container style={{ paddingBottom: 10 }}>
              <div><a href="https://www.iitdh.ac.in/">IIT Dharwad</a></div>
              <div><a href="https://parsec.iitdh.ac.in/">Parsec</a></div>
              <div><a href="https://smp.iitdh.ac.in/">SMP</a></div>
              <div><a href="https://cdc.iitdh.ac.in/">CDC</a></div>
              <div><a href="https://oss2019.github.io/">OSS</a></div>
              <div><a href="https://www.iitdh.ac.in/iic/">IIC</a></div>
            </Container>

          </MDBCol>
          <MDBCol md="3">
            <div style={{ margin: 'auto', alignItems: 'center', width: '100%', height: '100%' }}>
              <h5 className="title" style={{ margin: 'auto' }}>OUR HANDLES</h5>
              <br />
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
              <div style={{ margin: 'auto', alignItems: 'center' }}>
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