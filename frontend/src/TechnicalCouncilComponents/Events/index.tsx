import { MDBCard } from 'mdbreact';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip'
import './styles.css';
import img1 from './Images/Dummy-image.jpg';
interface IProps {}
const data = [{},{},{},{}];
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
                        <MDBCard className='round' style={{...jumb, 
                            width:'90%', 
                            height:'250px', 
                            backgroundColor:'black', 
                            margin:'auto', padding:20}}>
                            <div style={{marginTop:'auto', marginBottom:'auto', marginLeft:'50px', color:'white'}}>
                            <h1 style={{textAlign:'left', fontFamily:'monospace', fontWeight:'bolder', fontSize:'50px'}}>CODE TOPIA 1</h1>
                            <hr color='white' style={{float:'left', width:'36%', height:'1px', borderRadius:'60px'}}/>
                            </div>
                        </MDBCard>
                    </div>
                    <div className='back' style={{width:'auto', height:'auto '}} onMouseLeave={() => {
                        setflipped(!flipped)
                        }}>
                        <MDBCard className='round' style={{...jumb, width:'90%', height:'250px', backgroundColor:'black', margin:'auto', padding:20}}>
                            <div style={{marginTop:'auto', marginBottom:'auto', marginLeft:'30px', marginRight:'30px', color:'white'}}>
                                <h1 style={{textAlign:'left', fontSize:'20px', fontWeight:'bolder'}}>
                                 organized by
                                 know more
                                </h1>
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
                data.map((info,index)=> (<EventCard />))
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
