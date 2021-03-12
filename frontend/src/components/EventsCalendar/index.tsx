import React, { useRef } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'react-bootstrap';
import { EventsSingleton, IEvent } from '../../model/EventsModel';
import SelectedEventCard from '../SelectedEventCard';
import useScroll from '../../template/useScroll';
import './styles.css';

moment.locale('en-GB');
const localizer = momentLocalizer(moment)


interface IProps { }

const EventsCalendar: React.FC<IProps> = ({ }) => {
  // const [EventChecked, setEventChecked] = React.useState<boolean>(false);
  const [SelectedEvent, setSelectedEvent] = React.useState<IEvent | null>(null);
  // const [executeScroll, selectedEventReference] = useScroll()
  const selectedEventReference = useRef<HTMLDivElement>(null);

  // const executeScrollCallback = () => executeScroll;
  const obj = EventsSingleton.getInstance();
  const events = obj.getAllEvents();
  return (
    <Container style={{ paddingTop: '5%' }}>
      <div>
        <h1 style={{ marginBottom: '15px', textAlign: 'center', color: 'red'}}>
          Student Activities Calendar
        </h1>
      </div>
      <Calendar
        localizer={localizer}
        events={
          events.map((event: IEvent) => {
            const data = {
              ...event,
              start: moment(event.start, 'MMMM Do YYYY, h:mm:ss a').toDate(),
              end: moment(event.end, 'MMMM Do YYYY, h:mm:ss a').toDate()
            }
            return data;
          })
        }
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
      <div ref={selectedEventReference} style={{padding:'5%'}} >
      { SelectedEvent ? <Container><SelectedEventCard event={SelectedEvent} /></Container> : <></>}
      </div>
    </Container>
  )
};

export default EventsCalendar;
