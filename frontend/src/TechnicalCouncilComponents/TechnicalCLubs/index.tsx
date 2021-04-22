import { MDBCard, MDBIcon } from 'mdbreact';
import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Background } from 'react-parallax';
import { Parallax } from 'react-parallax';

import "./styles.css"
interface clubInfo {
    name : string;
    src: string;
    bg:string;
    secy:string;
    desc:string;
    phone:number;
    email:string;
}
interface Iprop{
    clubData : clubInfo;
}


const clubData = [
    {
        name: 'Code Geass',
        src: require('../../assets/Technical Council/Clubs/codeGeass.png'),
        bg:'black',
        secy: 'Omkar DJ',
        desc: 'Coding Club',
        phone: 8861860976,
        email: 'codingclub@iitdh.ac.in'
    },
    {
        name: 'Hardly Humans',
        src: require('../../assets/Technical Council/Clubs/AI.jpeg'),
        bg:'#101e38',
        secy: 'Akhilesh Bharadwaj',
        desc: 'AI and Datascience club',
        phone: 1233454322,
        email: 'aiclub@iitdh.ac.in'
    }, {
        name: 'Robotics Club',
        src: require('../../assets/Technical Council/Clubs/AI.jpeg'),
        bg:'#101e38',
        secy: 'Sohan Anisetty',
        desc: 'Robotics Club',
        phone: 1233454322,
        email: 'robotics@iitdh.ac.in'
    }
  
  ]
  


const TechnicalClubs = () => {
    const ClubView: React.FC<Iprop> = (props) => {
       const [hover, sethover] = useState(false); 
       const OnHover = () =>  (<>
        <MDBCard style={{width:250,height:250, backgroundColor:'yellow', padding:10}}>    
        <h3 className="font-weight-bold dark-grey-text mb-3 p-0" style={{textAlign:'center'}}>
          <a href="#!">{props.clubData.name}</a>
        </h3>
        <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" roundedCircle width={100} height={100} style={{margin:'auto', marginTop:3}} />
        <h6 className="font-weight-bold" style={{textAlign:'center', paddingTop:10}}>
         {props.clubData.desc}
        </h6> 
        {/* <div className="d-flex" style={{}}> */}
          <a href="#!" className="deep-orange-text">
            <h6 className="font-weight-bold" style={{textAlign:'center'}}>
              <MDBIcon icon="graduation-cap" className="pr-2" />
                {props.clubData.secy}
            </h6>
          </a>
        {/* </div> */}
        
        <div className="d-flex justify-content-between">
          <a href={`tel:${props.clubData.phone}`} className="deep-orange-text">
            <h6 className="font-weight-bold">
              <MDBIcon icon="phone" className="pr-2" />
            </h6>
          </a>
          <a href={`mailto:${props.clubData.email}`} className="deep-orange-text">
            <h6 className="font-weight-bold">
              <MDBIcon icon="envelope" className="pr-2" />
            </h6>
        </a>
        
        </div>
        
              </MDBCard>
              <div style={{height:250, width:250, backgroundImage:'url('+props.clubData.src+')', backgroundSize: 'cover', marginLeft:5, marginTop:-245}}>
        </div>      
     </>)


       return( <div onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)} style={{height:265, width:255, maxWidth:'100%', margin:'auto'}}> 
        {
            hover? <OnHover />:
        <>
        <div style={{height:250, width:250, backgroundColor:'yellow'}}>
        </div>
        <div style={{height:250, width:250, backgroundColor:'blue', marginLeft:5, marginTop:-245}}>
          <div>
            <img src={props.clubData.src} width={250} height={250} />
          </div>
        </div>
        </>
    }    
        </div>)
    }
    
    return (
        <div style={{maxWidth:'100%'}}>
                <Row style={{maxWidth:'100%', margin:'auto'}}>
                {
                    clubData.map((data:clubInfo,index:number)=> {
                        return (
                        <Col xl={4} xs={12} md={4} style={{margin:'auto', paddingTop:25}}>
                        <ClubView  clubData={data}/>
                        </Col>
                        )
                    })
                }
                </Row>
        </div>
    );
}

export default TechnicalClubs;
