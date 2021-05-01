import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './styles.css';

const ClubData = [
    {
        "name": "Dance Club",
        "secy":  "Purnima Priyadarshini",
        "memb": "google",
        "logo": `${require('../../assets/logo.png')}`,
        "desc": "We organise a lot of fun events,workshops on Dance!"
    },
    {
        "name": "Drama Club",
        "secy":  "Rohit Gour",
        "memb": "google",
        "logo": `${require('../../assets/logo.png')}`,
        "desc": "We organise a lot of fun events,workshops on Drama!"
    },
    {
        "name": "Fine Arts Club",
        "secy":  "Fidha",
        "memb": "google",
        "logo": `${require('../../assets/logo.png')}`,
        "desc": "We organise a lot of fun events,workshops on Fine Arts!"
    },
    {
        "name": "Literary Club",
        "secy":  "Sameer Anis Dohadwalla",
        "memb": "google",
        "logo": `${require('../../assets/logo.png')}`,
        "desc": "We organise a lot of fun events,workshops related to Literacy!"
    },
    {
        "name": "Music Club",
        "secy":  "Rushikesh Dixit",
        "memb": "google",
        "logo": `${require('../../assets/logo.png')}`,
        "desc": "We organise a lot of fun events,workshops related to Music!"
    },    
    {
        "name": "Photography and Films Club",
        "secy":  "Prajwal Paloju",
        "memb": "google",
        "logo": `${require('../../assets/logo.png')}`,
        "desc": "We organise a lot of fun events,workshops on Filming and Photography!"
    }, 
    {
        "name": "Quiz Club",
        "secy":  "Abhinav Soni",
        "memb": "google",
        "logo": `${require('../../assets/logo.png')}`,
        "desc": "We organise a lot of fun events,trivias!"
    }         
]

function CultClubs() {

    const [show, setShow] = useState(0);
    var index = show==0?show:show-1;

    return (<>
        <MDBContainer fluid className="text-center text-md-left">
            <MDBRow className="info-div" style={{width:'auto', marginLeft:'5%', marginRight:'5%', marginTop: '5%'}}>
                <MDBCol className="text-md-left" md="6" style={{display: show==0?'block':'none'}}>
                    <h3 style={{color:'#8A003E'}}><strong>CULTURAL COUNCIL</strong></h3>
                        <p className="para" style={{color:'#DF0054', fontWeight:'bolder'}}> 
                        Welcome to the CULTURAL COUNCIL! Here we do a lot of cool stuff and our main motive is to enable 
                        students to pursue their hobbies,interests apart from the usual academics. Platform for various
                        events like Music,Art,Dance etc is open welcoming students to showcase their hidden talents!
                    </p>
                </MDBCol>
                <MDBCol className="text-md-left" md="6" style={{display: show!==0?'block':'none'}}>
                    <MDBRow>
                        <MDBCol>
                            <img src={ClubData[index].logo} alt="ClubImage" style={{height: '100%', width: '30%'}} className="shadow-box-example hoverable"/>
                        </MDBCol>
                        <MDBCol>
                            <h3 style={{color:'#8A003E'}}><strong>{ClubData[index].name}</strong></h3>
                            <h5 style={{color:'#8A003E'}}>{ClubData[index].secy}</h5>
                            <p className="para" style={{color:'#DF0054', fontWeight:'bolder'}}> 
                                {ClubData[index].desc}
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol className="text-md-right" md="6" xs='10'>
                    <MDBContainer style={{listStyle:'none', marginLeft:'0', paddingRight:'0', paddingLeft: '0'}}>
                        <MDBCol>
                            <h4 className="title" style={{fontWeight:'bold', color:'#8A003E'}}>CLUBS</h4>
                        </MDBCol>
                        <MDBCol>
                            <div onClick={() => {if(show==0) setShow(1); else {if(show==1) setShow(0); else setShow(1)}}} style={{width: 'auto', height: '100%', borderRight: show==1?'3px solid #8A003E':'none'}}> 
                                <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054', paddingRight: '2%'}}>{ClubData[0].name}</h6>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div onClick={() => {if(show==0) setShow(2); else {if(show==2) setShow(0); else setShow(2)}}} style={{width: 'auto', height: '100%', borderRight: show==2?'3px solid #8A003E':'none'}}>
                                <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054', paddingRight: '2%'}}>{ClubData[1].name}</h6>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div onClick={() => {if(show==0) setShow(3); else {if(show==3) setShow(0); else setShow(3)}}} style={{width: 'auto', height: '100%', borderRight: show==3?'3px solid #8A003E':'none'}}>
                                <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054', paddingRight: '2%'}}>{ClubData[2].name}</h6>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div onClick={() => {if(show==0) setShow(4); else {if(show==4) setShow(0); else setShow(4)}}} style={{width: 'auto', height: '100%', borderRight: show==4?'3px solid #8A003E':'none'}}>
                                <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054', paddingRight: '2%'}}>{ClubData[3].name}</h6>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div onClick={() => {if(show==0) setShow(5); else {if(show==5) setShow(0); else setShow(5)}}} style={{width: 'auto', height: '100%', borderRight: show==5?'3px solid #8A003E':'none'}}>
                                <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054', paddingRight: '2%'}}>{ClubData[4].name}</h6>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div onClick={() => {if(show==0) setShow(6); else {if(show==6) setShow(0); else setShow(6)}}} style={{width: 'auto', height: '100%', borderRight: show==6?'3px solid #8A003E':'none'}}>
                                <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054', paddingRight: '2%'}}>{ClubData[5].name}</h6>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div onClick={() => {if(show==0) setShow(7); else {if(show==7) setShow(0); else setShow(7)}}} style={{width: 'auto', height: '100%', borderRight: show==7?'3px solid #8A003E':'none'}}>
                                <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054', paddingRight: '2%'}}>{ClubData[6].name}</h6>
                            </div>
                        </MDBCol>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>);
}
  
export default CultClubs;