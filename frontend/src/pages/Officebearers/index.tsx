import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Details from '../../components/CouncilMemberDetail';

interface IdeviceInfo {
  isDesktopOrLaptop : boolean,
  isBigScreen : boolean,
  isTabletOrMobile : boolean,
  isTabletOrMobileDevice : boolean,
  isPortrait : boolean,
  isRetina : boolean
}


const Officebearers: React.FC = () => {
  // making the page responsive:
  const deviceInfo: IdeviceInfo = {
    isDesktopOrLaptop : useMediaQuery({
      query: '(min-device-width: 1224px)'
    }),
    isBigScreen : useMediaQuery({ query: '(min-device-width: 1824px)' }),
    isTabletOrMobile : useMediaQuery({ query: '(max-width: 1224px)' }),
    isTabletOrMobileDevice : useMediaQuery({
      query: '(max-device-width: 1224px)'
    }),
    isPortrait : useMediaQuery({ query: '(orientation: portrait)' }),
    isRetina : useMediaQuery({ query: '(min-resolution: 2dppx)' }),
  }
  return (
    <div style={container}>
      <div style={element}>
      <Header />
      <Details deviceInfo = {deviceInfo}/>
      <Footer/>
      </div>
    </div>
  );
};

const container: React.CSSProperties = {
  display: 'flex'
}
const element : React.CSSProperties = {
  flex:1,
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center'
}
export default Officebearers;
