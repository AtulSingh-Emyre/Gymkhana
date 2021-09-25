import React, { useState, useEffect } from 'react';
import EventsCalendar from '../../components/EventsCalendar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {CSSTransition} from 'react-transition-group';
import PageStarter from '../../template/PageStarter';


const Calendar: React.FC = () => {
  return (
    <>
    {/* <Header active={{calendar:true}} /> */}
    <PageStarter heading={'STUDENTS ACTIVITY CALENDAR'}>
      <div style={{maxWidth:'100%', height:'auto', padding:'2.5%'}}>
        <EventsCalendar editable={false}/>
      </div>  
    </PageStarter>
      {/* <Footer /> */}
    </>
  );
};

export default Calendar;
