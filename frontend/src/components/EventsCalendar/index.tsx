import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'react-bootstrap';

moment.locale('en-GB');
const localizer = momentLocalizer(moment)

interface IProps{}

const EventsCalendar :React.FC<IProps> = ({}) => (
  <Container style={{paddingTop:'5%'}}>
    <div>
      <h5>
        Events Calendar
      </h5>
    </div>
    <Calendar
        localizer={localizer}
        events={[
            {
            'title': 'My event',
            'allDay': false,
            'start': new Date(2021, 2, 1, 10, 0), // 10.00 AM
            'end': new Date(2021, 2, 1, 14, 0), // 2.00 PM 
            }
        ]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event:any)=> {console.log(event)
        }}
    />
    <div>
      {/* here goes new event data form */}
    </div>
    <div>
      {/* here goes selected event data */}
    </div>
    </Container>
);

export default EventsCalendar;
