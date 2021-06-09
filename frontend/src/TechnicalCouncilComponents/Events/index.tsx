import { MDBCard } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import api from '../../services/api';
// import {TechEventRepository} from '../../services/TechEventRepository'
import './styles.css';
interface IProps {
    info: {
        title: string,
        description: string,
        link: string,
        created_at: any,
        updated_at: any,
    } | any;
}

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

    const [data, setdata] = useState<any>([]);
    useEffect(() => {
        const serverReq = async () => {
            try{
            const resp = await await api.get('/tech/current');
            // console.log(resp);
            setdata(resp.data.data);
            console.log(data);
            return resp;
            }
            catch(err) {
                console.log(err);
            } 
          }
          serverReq();
        return () => {
        };
    }, []);

    const event = (<>
    <div id={"eventsTech"}>
        <Row style={{margin:'auto'}}>
            {
                data.map((info: any,index: number)=> (<EventCard info={{...info}} />))
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
