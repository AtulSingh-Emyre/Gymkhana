import React, { useState, useEffect, lazy, Suspense } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Homepage from '../../components/Homepage';
import Details from '../../components/CouncilMemberDetail';
import PreviousCouncilMemsContainer from '../../components/PreviousCouncilMemsContainer';

// const Header = lazy(() => import('../../components/Header'))
// const Footer = lazy(() => import('../../components/Footer'))
// const Homepage = lazy(() => import('../../components/Homepage'))



const Dashboard: React.FC = () => {
  return (
    <div style={{minWidth:'100%'}} >
      <Header active={{home:true}} />
      <Homepage/>
      <Details />
    </div>
  );
};

export default Dashboard;
