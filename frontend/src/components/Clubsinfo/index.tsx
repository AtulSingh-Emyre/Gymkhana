import React from 'react';
// import clubdata from '../../assets/clubdetails.json';
import './style.css';
// @ts-ignore
import ClubsCard from '../ClubsCard';
import { Card, Col, Row } from 'react-bootstrap';

interface IProps {
    // club: Array<{
    //     id: string;
    //     clubname: string;
    //     secyname: string;
    //     memblink: string;
    //     logo: string;
    //     clubdesc: string;
    // }>
}

const clubData = [
    {
        name: 'Code Geass',
        src: require('../../assets/Technical Council/Clubs/codeGeass.png'),
        bg:'black',
        secy: 'Omkar DJ',
        desc: 'Code Geass is the official coding club at IIT Dharwad. It serves to bring together a community enriched in coding in terms both- algorithms as well as development.'
    },
    {
        name: 'Hardly Humans',
        src: require('../../assets/Technical Council/Clubs/AI.jpeg'),
        bg:'#101e38',
        secy: 'Akhilesh',
        desc: 'Hardly Humans is the official AI and Data science club at IIT Dharwad. It serves to bring together a community enriched in coding in terms both- algorithms as well as development.'
    }
  ]
  

const Clubsinfo = (prop: IProps) => {
    const [activeClub, setactiveClub] = React.useState(0);
    return (
        <>
            <div style={{padding:50, display:'flex'}}>
              <Row style={{display:'flex', justifyContent:'space-between'}}>
                <Col xl = {6} md={12}>  
                <ClubsCard  data={clubData[activeClub]} />
                </Col>
                <Col xl={5} md={12}>
                    <Row>
                       <h3> <strong>TECHNICAL CLUBS </strong></h3>
                    </Row>
                   {
                       clubData.map((info, index) => (
                            <Row>
                                <Card style={{width:'100%', padding:30, marginTop:20, marginBottom:20}} onClick = {()=> setactiveClub(index)}>
                                    {info.name}
                                </Card>    
                           </Row>
                       ))
                   }
                   
                    
                </Col>
              </Row>
            </div>
        </>
    )
};

export default Clubsinfo;