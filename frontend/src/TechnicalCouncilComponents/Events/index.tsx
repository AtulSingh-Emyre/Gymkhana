import { MDBCard } from 'mdbreact';
import React from 'react';
import { Container } from 'react-bootstrap';

const Events = () => {
    const event = (<>
    <MDBCard style={{width:'80%', height:'auto', backgroundColor:'black',margin:'auto', padding:20}}>
        <div style={{margin:'auto', color:'white'}}>
            <h1 style={{textAlign:'left'}}> Event 1</h1>
        </div>
        
    </MDBCard>
    <MDBCard style={{width:'80%', height:'auto', backgroundColor:'black',margin:'auto', padding:20}}>
        <div style={{margin:'auto', color:'white'}}>
            <h1 style={{textAlign:'left'}}> Event 1</h1>
        </div>
        
    </MDBCard>
    <MDBCard style={{width:'80%', height:'auto', backgroundColor:'black',margin:'auto', padding:20}}>
        <div style={{margin:'auto', color:'white'}}>
            <h1 style={{textAlign:'left'}}> Event 1</h1>
        </div>
        
    </MDBCard>
    </>)
    
    return (
        <div>
            <Container>
            <h1> <strong> Events </strong> </h1>
            {event}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
           
            </Container>
        </div>
    );
}

export default Events;
