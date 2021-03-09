import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import PreviousCouncilMems from "../../components/PreviousCouncilMems";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Details from '../../components/CouncilMemberDetail';
import PreviousCouncilMemsContainer from '../../components/PreviousCouncilMemsContainer';

const Officebearers: React.FC = () => {
  // making the page responsive:
  return (
    <div style={container}>
      <Header active={{office:true}}/>
      <Details />
      <PreviousCouncilMemsContainer />
      <Footer />
    </div>
  );
};

const container: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}
export default Officebearers;
