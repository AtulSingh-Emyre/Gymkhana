import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './styles.css'

interface Ipropss {
    user : {
        year:string;
        gsAcad?: string,
        gsCult?: string;
        gsHos?: string;
        gsTech?: string;
        gsSports?: string;
        gsMess?: string
    }
}


const PreviousCouncilMems = (props : Ipropss) => {
    return(
        <>
        <h5 style={{textAlign:'center'}}> <strong> Office Bearers : {props.user.year} </strong></h5>
        <Container style={{margin:'auto', padding:'2.5%', alignItems:'center',fontSize:'17px'}}>
        <Row style={{width:'100%', alignSelf:'center', alignItems:'center', margin:'0 auto'}}>
        {props.user.gsTech?  <div style = {{ width:'100%', textAlign:'center'}}> <b> General Secretary, Technical Affairs:</b> {props.user.gsTech} <br/></div>:<></>}
        {props.user.gsAcad? <div style = {{ width:'100%', textAlign:'center'}}> <b>General Secretary Academic Affairs:</b> {props.user.gsAcad}<br/></div>:<></>}
        {props.user.gsCult? <div style = {{ width:'100%', textAlign:'center'}}> <b>General Secretary Cultural Affairs:</b> {props.user.gsCult}<br/></div>:<></>}
        {props.user.gsSports? <div style = {{ width:'100%', textAlign:'center'}}><b>General Secretary Sports Affairs:</b> {props.user.gsSports}<br/></div>:<></>}
        {props.user.gsHos? <div style = {{ width:'100%', textAlign:'center'}}><b>General Secretary Hostel Affairs:</b> {props.user.gsHos}<br/></div>:<></>}
        {props.user.gsMess? <div style = {{ width:'100%', textAlign:'center'}}><b>General Secretary Mess Affairs:</b> {props.user.gsMess}<br/></div>:<></>}
        </Row>
        </Container>
        </>
        
    );
}

export default PreviousCouncilMems;
