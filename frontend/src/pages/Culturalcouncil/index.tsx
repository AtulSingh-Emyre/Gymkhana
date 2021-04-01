import React, { useState, useEffect } from 'react';
import Compiled from '../../CulturalCouncilComponents/CultCombined';
import { useMediaQuery } from 'react-responsive';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

const Culturalcouncil: React.FC = () => {
  return (
    <>
      <div className='CultCouncil' style={{...main}}>
        <Compiled />
      </div>
    </>
  );
};

const main:React.CSSProperties = {
  background: 'linear-gradient(to right, #FEDBD0, #FEDBD0)',
  height: 'auto',
  paddingTop:'55px',
  paddingBottom:'55px'
}

export default Culturalcouncil;
