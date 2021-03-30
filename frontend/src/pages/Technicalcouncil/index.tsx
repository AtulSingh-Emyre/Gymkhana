import React from 'react';
import Events from '../../TechnicalCouncilComponents/Events';
import LandingScreen from '../../TechnicalCouncilComponents/LandingScreen';
import TechHeader from '../../TechnicalCouncilComponents/TechHeader';
import TechnicalClubs from '../../TechnicalCouncilComponents/TechnicalCLubs';
import { Parallax } from 'react-parallax';
import { Container } from 'react-bootstrap';
import TechFest from '../../TechnicalCouncilComponents/TechFest';
import Footer from '../../components/Footer';


// import "./styles.css"
const Technicalcouncil: React.FC = () => {
  return (
    <>
      <LandingScreen />
      <div style={{backgroundColor:'#546E7A'}}>
        <TechHeader />
        <div style={{height:100, width:'100%', textAlign:'center', margin:'auto'}}>
          <h1 style={{padding:27, color:'white', fontFamily:'Courier New'}}>
            <strong>Technical Clubs </strong>
          </h1>  
        </div> 
        <div style={{paddingBottom:50}}>
        <div style={{width:'100%',marginLeft:'auto'}}>  
          <TechnicalClubs />
        </div>
        </div>
        
        <Parallax bgImage={require('../../assets/Technical Council/techMeet.jpeg')} strength={100}> 
          <div style={{minHeight:300, width:'100%'}}>
          </div>
        </Parallax>
        <div style={{height:100, width:'100%', textAlign:'center', margin:'auto'}}>
          <h1 style={{margin:'auto', padding:25, color:'white', fontFamily:'Courier New'}}> <strong> Projects and Events </strong> </h1>
        </div>
        <div style={{width:'100%', margin:'auto'}}> 
            <Container style={{paddingBottom:50, paddingTop:50}}>  
              <Events />
            </Container>
        </div>
        <div style={{width:'100%', backgroundColor:'white'}}>
        <TechFest />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
};
export default Technicalcouncil;
