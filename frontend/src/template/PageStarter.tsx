import { MDBCard } from 'mdbreact';
import React, { ReactPropTypes } from 'react';
import { Container } from 'react-bootstrap';

interface IProp {
    heading: string;
    children: any;
    color?: string;
    id?:string;
}


const PageStarter = (props: IProp) => {
    return (
        <div 
        id={props.id}
        style={{
          maxWidth:'100%',
          margin:'auto', 
          position:'relative', 
          backgroundColor:props.color?props.color:'white', 
          padding:30, 
          marginBottom:0
        }}>
          <div style={{width:'100%', position:'relative', top:0, paddingTop:20, height:'150px', zIndex:2}} className={'child1'} >
            <Container >
              <strong> <b>
                <h3 style={{maxWidth:'100%',textAlign:'center', position:'relative', top:'20px', bottom:0, right:10, left:10, color:'blueviolet', fontFamily:'Arial Black'}}>
                {/* // OFFICE BEARERS */}
                {props.heading}
                </h3>
                </b> </strong>
            </Container>
          </div>
          <div style={{
            width:'100%', 
            position: 'relative', 
            backgroundColor:'white',
            // margin:'auto', 
            margin:'auto',
            marginTop:'0px',
            zIndex:3, 
          }} className={'child2'}>
            {/* <MDBCard > */}
                {props.children}
            {/* <Details /> */}
            {/* </MDBCard> */}
          </div>
        </div>
       
    );
}

export default PageStarter;
