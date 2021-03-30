import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Modal, Button, Form } from 'react-bootstrap';
import './style.css';
const TechFooter = () => {
  return (
    <div style={{backgroundColor:'black', marginTop:-25}}>
      <MDBFooter color="stylish-color-dark" className="font-small pt-4 mt-4 f">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
            <div style={{position:'sticky'}}>
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
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
            </MDBCol>
            <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Write to us
            </h5>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                  <Form.Text className="text-muted">
                   
    </Form.Text>
                </Form.Group>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                   
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="text" placeholder="Message" size='lg' />
                </Form.Group>
                <Button variant="info" type="submit" block>
                  Submit
  </Button>
              </Form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br></br>
        <div className="footer-copyright text-center py-3" style={{marginTop:'5px'}}>
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.iitdh.ac.in/"> IIT Dharwad </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  )
}

export default TechFooter
