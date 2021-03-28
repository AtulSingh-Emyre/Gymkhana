import { MDBBtn, MDBCardBody, MDBIcon, MDBMask} from 'mdbreact';
import React from 'react';
import {  Button, Card, Col, Row } from 'react-bootstrap';

const projects = [
  {

  },
  {

  },
  {

  },
  {

  },{

  }, {

  }
]

const Projects = () => {

    return (
        <div  style={{maxWidth:'100%'}}>
         <Row style={{maxWidth:'100%'}}>
          {
            projects.map(data=> (<Col md="6" xl="4">
            <div style={{width:'90%', margin:'auto', zIndex:0, backgroundImage : `url("https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg")`, minHeight:300}}>
            </div>
            <div style = {{marginTop:-50, zIndex:2}}>
            <Card.Body style={{margin:'auto', width:'70%', textAlign:'center', zIndex:2, backgroundColor:'white'}} >
                <h5>
                    Robotics Club
                </h5>
              <h4 className="font-weight-bold mb-3">First Project</h4>
              
              <Button variant="success">
                Know More {'>'}{'>'}
              </Button>
            </Card.Body>
            </div>
          </Col>))
          }
          
        </Row>
        </div>
    );
}

export default Projects;
