import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-GB');
const localizer = momentLocalizer(moment)

interface IProps{}

const EventsCalendar :React.FC<IProps> = ({}) => (
  <div style={{ height: 700 }}>
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
  </div>
);

export default EventsCalendar;
