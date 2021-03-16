import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiChevronsDown } from "react-icons/bi";
import { CSSTransition } from 'react-transition-group';
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
        <Row style={{width:'95%', alignSelf:'center', alignItems:'center', margin:'0 auto'}}>
        {props.user.gsTech?  <>General Secretary, Technical Affairs: {props.user.gsTech} <br/></>:<></>}
        {props.user.gsAcad? < > General Secretary Academic Affairs: {props.user.gsAcad}<br/></>:<></>}
        {props.user.gsCult? < >General Secretary Cultural Affairs: {props.user.gsCult}<br/></>:<></>}
        {props.user.gsSports? <>General Secretary Sports Affairs: {props.user.gsSports}<br/></>:<></>}
        {props.user.gsHos? <>General Secretary Hostel Affairs: {props.user.gsHos}<br/></>:<></>}
        {props.user.gsMess? <>General Secretary Mess Affairs: {props.user.gsMess}<br/></>:<></>}
        </Row>
        </Container>
        </>
        
    );
}
const container : React.CSSProperties = {
    // margin:'5%',
    alignItems:'center',
    alignSelf:'center',
    width:'100%',
    height:'100%',
    padding:5,
    margin:'auto',
}


export default PreviousCouncilMems;
