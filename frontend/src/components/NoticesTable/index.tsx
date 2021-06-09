import moment from 'moment';
import React, { useEffect } from 'react';
import { Container, Pagination, Table, } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { EventsSingleton } from '../../model/EventsModel';
import { CalendarEventRepository } from '../../services/CalendarEventServices';
import NoticeTableRow from '../NoticeTableRow';


const Card = () => {
  const [data, setdata] = React.useState<any>([]);
  const [skip, setSkip] = React.useState<number>(0);
  // const [executeScroll, selectedEventReference] = useScroll()
  useEffect(() => {
    const serverReq = async () => {
      const resp = await CalendarEventRepository.getEvents(skip,20);
      console.log(resp);
      setdata(resp.data.data);
      console.log(data);
      
      return resp; 
    }
    serverReq();
  }, [skip]);
  
  const wideScreenQuery = useMediaQuery({
    query: '(min-device-width: 700px)'
  });
  

  const wideScreenView = (
    <Table striped bordered hover style={container}>
      <thead>
        <tr>
          <th>#</th>
          <th>Event</th>
          <th>Organiser</th>
          <th>Date</th>
          <th>Time</th>
          <th>Venue</th>
          <th>Attachment</th>
          
        </tr>
      </thead>
      <tbody>
        {
          data.map((data:any, index:number) => data.notice ? 
            (
            <NoticeTableRow data={{
              attachment: [{ poster: data.poster }, { result: data.result }],
              date: moment(data.start).format('MMMM Do YYYY'),
              id: index + 1,
              organiser: data.organizer,
              event: data.title,
              time: moment(data.start).format(' h:mm:ss a'),
              venue: data.venue
            }} />

          ) : <></>)
        }
      </tbody>
    </Table>);

  const semiWideScreenView = (<Table striped bordered hover style={container}>
    <thead>
      <tr>
        <th>#</th>
        <th>Organiser</th>
        <th>Date</th>
        <th>Links</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((data:any, index:number) => data.notice ? (
          <NoticeTableRow data={{
            attachment: [{ poster: data.poster }, { result: data.result }],
            date: moment(data.start).format('MMMM Do YYYY'),
            id: index + 1,
            organiser: data.organizer,
          }} />
        ) : <></>)
      }
    </tbody>
  </Table>
  );

  return (
    <Container style={container}>
      {
        wideScreenQuery ? wideScreenView : semiWideScreenView
      }
      <Pagination style={pagination}>
        <div style={autoMargin}>
          <Pagination.First onClick={() => {
            setSkip(0);
          }} />
          <Pagination.Prev onClick={() => {
            setSkip(skip-20>0?skip-20:0);
          }}/>
          <Pagination.Next onClick={() => {
            setSkip(skip+20);
          }}/>
          <Pagination.Last onClick={() => {
            setSkip(-20);
          }} />
        </div>
      </Pagination>
    </Container>
  )
}

const container: React.CSSProperties = {
  maxWidth: '100%',
  padding:'3%'
}
const pagination: React.CSSProperties = {
  width: '100%',
  alignSelf: 'center',
  margin: 'auto',
  alignContent: 'center',
  // backgroundColor: 'black'
}
const autoMargin: React.CSSProperties = {
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row'
}
export default Card
