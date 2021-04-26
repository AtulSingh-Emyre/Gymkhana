import { MDBCard } from 'mdbreact';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip'
import './styles.css';
interface IProps {
    info: {
        title: string,
        description: string,
        link: string
    }
}
const data = [{
    title:"Summer of Innovation",
    description: "A summer long technical event comprising of problem statements from multiple domains and contributed by each club.",
    link: "https://oss2019.github.io/"
},{
    title: "Code Topia",
    description: "A workshop for the freshers in coding domain in order to provide resources and basic understanding of fundamental concepts used in coding.",
    link: ""
},{
    title: "PARSEC",
    description: "The annual technical event of IIT Dharwad.",
    link: "https://parsec.iitdh.ac.in/"
},{
    title: "Arduino Workshop",
    description: "An introductory workshop for freshers regarding arduino Uno board.",
    link:""
}];
const Events = () => {
    const EventCard: React.FC<IProps>  = (props) => {
        const [flipped, setflipped] = useState(false);
        return (
            <Col xl={6} md={6} xs = {12} style={{marginBottom:30}}>
                <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
                    <div className='front' style={{width:'auto', height:'auto'}} onMouseEnter={() => {
                        setflipped(!flipped)
                    }}
                    >
                        <MDBCard className='round' style={{
                            ...jumb, 
                            width:'100%', 
                            height:'250px', 
                            backgroundColor:'black', 
                            margin:'auto', padding:20}}>
                            <div style={{marginTop:'auto', marginBottom:'auto', marginLeft:'20px', color:'white'}}>
                            <h1 style={{textAlign:'left', fontFamily:'monospace', fontWeight:'bolder', fontSize:'20px'}}>{props.info.title}</h1>
                            <hr color='white' style={{float:'left', width:'36%', height:'1px', borderRadius:'60px'}}/>
                            </div>
                        </MDBCard>
                    </div>
                    <div className='back' style={{width:'auto', height:'auto '}} onMouseLeave={() => {
                        setflipped(!flipped)
                        }}>
                        <MDBCard className='round' style={{...jumb, width:'100%', height:'250px', backgroundColor:'black', margin:'auto', padding:20}}>
                            <div style={{marginTop:'auto', marginBottom:'auto', marginLeft:'30px', marginRight:'30px', color:'white'}}>
                                <h1 style={{textAlign:'left', fontSize:'20px', fontWeight:'bolder'}}>
                                 {props.info.description}
                                 </h1>
                                 <a href={props.info.link}>know more {">"} </a>
                            </div>
                        </MDBCard>
                    </div>
                </ReactCardFlip>
            </Col>
        )
    }
    const event = (<>
    <div>
        <Row style={{margin:'auto'}}>
            {
                data.map((info,index)=> (<EventCard info={{...info}} />))
            }
        </Row>
        </div>
    </>)
    
    return (
        <div>
            <Container>
            {event}
            </Container>
        </div>
    );
}

const jumb : React.CSSProperties = {
    borderRadius: '10px',
}

export default Events;
