import React, { useState, useEffect } from 'react';
import EventsCalendar from '../../components/EventsCalendar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {CSSTransition} from 'react-transition-group';


const Calendar: React.FC = () => {
  return (
    <>
    <Header active={{calendar:true}} />
    <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
      <EventsCalendar/>
      </CSSTransition>  
      <Footer />
      
    </>
  );
};

export default Calendar;
