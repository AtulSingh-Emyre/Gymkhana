import { MDBCard } from 'mdbreact';
import React, { ReactPropTypes } from 'react';
import { Container } from 'react-bootstrap';

interface IProp {
    heading: string;
    children: any;
}


const PageStarter = (props: IProp) => {
    return (
        <div style={{width:'100%', 
        // height:'calc(inherit - 50px)',
        position:'relative', backgroundColor:'white', padding:0, marginBottom:0}}>
          <div style={{width:'100%', position:'relative', top:0, paddingTop:50, height:'400px', backgroundColor:'black', zIndex:2}} className={'child1'} >
            <Container >
              <strong> <b>
                <h1 style={{textAlign:'center', position:'relative', top:'100px', bottom:0, right:10, left:10, color:'white', fontFamily:'Arial Black'}}>
                {/* // OFFICE BEARERS */}
                {props.heading}
                </h1>
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
                {props.children}
            {/* <Details /> */}
            </MDBCard>
          </div>
        </div>
       
    );
}

export default PageStarter;
