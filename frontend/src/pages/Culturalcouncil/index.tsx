import React, { useState, useEffect } from 'react';
import Compiled from '../../CulturalCouncilComponents/CultCombined';
import { useMediaQuery } from 'react-responsive';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

const Culturalcouncil: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 770px)' })
  return (
    <>
      <div className='CultCouncil' style={{...main, paddingTop:isTabletOrMobile? '0px': '55px', paddingBottom:isTabletOrMobile? '0px': '55px'}}>
        <Compiled />
      </div>
    </>
  );
};

const main:React.CSSProperties = {
  background: '#FFA88F',
  height: 'auto'
}

export default Culturalcouncil;
