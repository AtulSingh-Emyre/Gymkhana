import React, { useState, useEffect } from 'react';
import EventsCalendar from '../../components/EventsCalendar';

interface IFoodPlate {
}

const Dashboard: React.FC = () => {
  return (
    <>
      <EventsCalendar/>
    </>
  );
};

export default Dashboard;
