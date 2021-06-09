import { MDBCard, MDBIcon } from 'mdbreact';
import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Background } from 'react-parallax';
import { Parallax } from 'react-parallax';
import { toast, ToastContainer } from 'react-toastify';

import "./styles.css"
interface clubInfo {
    name : string;
    src: string;
    bg:string;
    linkedin:string;
    secy:string;
    secyImg: string;
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
        linkedin:'https://www.linkedin.com/in/iamodj/',
        secy: 'Omkar DJ',
        secyImg: require('../../assets/Technical Council/Clubs/code_secy.jpg'),
        desc: 'Coding Club',
        phone: 8861860976,
        email: 'codingclub@iitdh.ac.in'
    },
    {
        name: 'Hardly Humans',
        src: require('../../assets/Technical Council/Clubs/AI.jpeg'),
        bg:'#101e38',
        secy: 'Akhilesh Bharadwaj',
        linkedin: 'https://www.linkedin.com/in/akhilesh-k-bharadwaj-a11a6b1a0/',
        secyImg: require('../../assets/Technical Council/Clubs/AI_secy.png'),
        desc: 'AI and Datascience club',
        phone: 6354808691,
        email: 'aiclub@iitdh.ac.in'
    }, {
        name: 'Robotics Club',
        src: require('../../assets/Technical Council/Clubs/Robotics.png'),
        bg:'#101e38',
        linkedin: 'https://www.linkedin.com/in/sohan-anisetty-b10188175/',
        secy: 'Sohan Anisetty',
        secyImg: require('../../assets/Technical Council/Clubs/Robotics_secy.jpg'),
        desc: 'Robotics Club',
        phone: 9820687340,
        email: 'robotics@iitdh.ac.in'
    }
  ]
  


const TechnicalClubs = () => {
    const ClubView: React.FC<Iprop> = (props) => {
       const [hover, sethover] = useState(false); 
       const OnHover = () =>  (<>
       
        <MDBCard style={{width:260,height:260, backgroundColor:'yellow', padding:10}}>    
            <h3 className="font-weight-bold dark-grey-text mb-3 p-0" style={{textAlign:'center'}}>
              <a href={''}>{props.clubData.name}</a>
            </h3>
            <Image src={props.clubData.secyImg} roundedCircle width={100} height={100} style={{margin:'auto', marginTop:3}} />
            <h6 className="font-weight-bold" style={{textAlign:'center', paddingTop:10}}>
            {props.clubData.desc}
            </h6> 
            {/* <div className="d-flex" style={{}}> */}
              <a href={props.clubData.linkedin} className="deep-orange-text">
                <h6 className="font-weight-bold" style={{textAlign:'center'}}>
                  <MDBIcon icon="graduation-cap" className="pr-2" />
                    {props.clubData.secy}
                </h6>
              </a>
            {/* </div> */}
            
            <div className="d-flex justify-content-between">
              <a href={`tel:${props.clubData.phone}`}
              // onClick={() => {
              //   navigator.clipboard.writeText(props.clubData.phone.toString());
              //   toast('Copied to Clipboard');  
              // }}
              className="deep-orange-text">
                <h6 className="font-weight-bold">
                  <MDBIcon icon="phone" className="pr-2" />
                </h6>
              </a>
              <a href={`mailto:${props.clubData.email}`} 
              // onClick={() => {
              //   navigator.clipboard.writeText(props.clubData.email)
              //   toast('Copied to Clipboard');
              // }}
              className="deep-orange-text">
                <h6 className="font-weight-bold">
                  <MDBIcon icon="envelope" className="pr-2" />
                </h6>
            </a>
            
            </div>
            
         </MDBCard>
         <div style={{height:260, width:260, backgroundColor:props.clubData.bg, backgroundImage:'url('+props.clubData.src+')', backgroundSize: 'cover', marginLeft:15, marginTop:-245}} />
        {/* </div>       */}
     </>)


       return( 
       <div onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)} style={{height:275, width:265, maxWidth:'100%', margin:'auto'}}> 
       <ToastContainer />
        {
            hover? <OnHover />:
        <>
        <MDBCard className={"techclubcard_dets"} style={{height:260, width:260, backgroundColor:'yellow'}} />
        
        <div style={{height:260, width:260, backgroundColor:props.clubData.bg, marginLeft:15, marginTop:-245, position:'relative', zIndex:1}}>
          <div>
            <img src={props.clubData.src} width={260} height={260} />
          </div>
        </div>
        </>
    }    
        </div>)
    }
    
    return (
        <div id={"clubsTech"} style={{maxWidth:'100%'}}>
                <Row style={{maxWidth:'100%', margin:'auto'}}>
                {
                    clubData.map((data:clubInfo,index:number)=> {
                        return (
                        <Col xl={4} xs={12} md={6} style={{margin:'auto',marginTop:15,paddingTop:25}}>
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
