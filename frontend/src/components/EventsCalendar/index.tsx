import React, { useEffect, useRef, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'react-bootstrap';
import { EventsSingleton, IEvent } from '../../model/EventsModel';
import SelectedEventCard from '../SelectedEventCard';
import './styles.css';
import { CalendarEventRepository } from '../../services/CalendarEventServices';

moment.locale('en-GB');
const localizer = momentLocalizer(moment)


interface IProps { 
  editable : boolean
}

const EventsCalendar: React.FC<IProps> = ({ editable }) => {
  // const [EventChecked, setEventChecked] = React.useState<boolean>(false);
  const [events, setevents] = useState<any>([]);
  const [SelectedEvent, setSelectedEvent] = React.useState<IEvent | null>(null);
  // const [executeScroll, selectedEventReference] = useScroll()
  const selectedEventReference = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const serverReq = async () => {
      const resp = await CalendarEventRepository.getEvents();
      console.log(resp);
      setevents(resp.data.data);
      return resp; 
    }
    serverReq();
  }, []);
  return (
    <Container style={{  }}>
      <Calendar
        localizer={localizer}
        views={['month', 'day', 'agenda']}
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={
          (event: any) => {
          setSelectedEvent({ ...event, start: moment(event.start).format('MMMM Do YYYY, h:mm a'), end: moment(event.end).format('MMMM Do YYYY, h:mm a') });
          if(selectedEventReference.current)
          selectedEventReference.current.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <div>
        {/* here goes new event data form */}
      </div>
      <div ref={selectedEventReference} style={{padding:SelectedEvent?'5%':0}} >
      { SelectedEvent ? <Container><SelectedEventCard event={SelectedEvent} editable={editable} /></Container> : <></>}
      </div>
    </Container>
  )
};

export default EventsCalendar;
