import React from 'react';
import Events from '../../TechnicalCouncilComponents/Events';
import LandingScreen from '../../TechnicalCouncilComponents/LandingScreen';
import Projects from '../../TechnicalCouncilComponents/Projects';
import TechHeader from '../../TechnicalCouncilComponents/TechHeader';
import TechnicalClubs from '../../TechnicalCouncilComponents/TechnicalCLubs';
import { ParallaxProvider } from 'react-scroll-parallax';
import Marquee from '../../TechnicalCouncilComponents/Marquee';
import { Parallax } from 'react-scroll-parallax';


// import "./styles.css"
const Technicalcouncil: React.FC = () => {
  return (
    <>
    {/* <ParallaxProvider> */}
      <LandingScreen />
      <TechHeader />
      
        <h2 style={{padding:20}}>Techno Clubs</h2>
         
      <div style={{maxWidth:'100%', margin:'auto'}}>
      <TechnicalClubs />
      </div>
      <Events />
      
    </>
  )
};
export default Technicalcouncil;
