import React, { useState } from 'react';
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
    const [Hover, setHover] = useState(false);
    return(
        <>
        <h5 style={{textAlign:'center'}}> <strong> Office Bearers : {props.user.year} </strong></h5>
        <Container style={{margin:'auto', padding:'2.5%', alignItems:'center'}}>
        <Row style={{width:'100%', alignSelf:'center', alignItems:'center', margin:'0 auto'}}>
        {props.user.gsTech?  <div style = {{ width:'100%', textAlign:'center'}}>General Secretary, Technical Affairs: {props.user.gsTech} <br/></div>:<></>}
        {props.user.gsAcad? <div style = {{ width:'100%', textAlign:'center'}}> General Secretary Academic Affairs: {props.user.gsAcad}<br/></div>:<></>}
        {props.user.gsCult? <div style = {{ width:'100%', textAlign:'center'}}>General Secretary Cultural Affairs: {props.user.gsCult}<br/></div>:<></>}
        {props.user.gsSports? <div style = {{ width:'100%', textAlign:'center'}}>General Secretary Sports Affairs: {props.user.gsSports}<br/></div>:<></>}
        {props.user.gsHos? <div style = {{ width:'100%', textAlign:'center'}}>General Secretary Hostel Affairs: {props.user.gsHos}<br/></div>:<></>}
        {props.user.gsMess? <div style = {{ width:'100%', textAlign:'center'}}>General Secretary Mess Affairs: {props.user.gsMess}<br/></div>:<></>}
        </Row>
        </Container>
        </>
        
    );
}

export default PreviousCouncilMems;
