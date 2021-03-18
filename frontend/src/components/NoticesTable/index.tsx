import React from 'react';
import { Container, Pagination, Table, } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { EventsSingleton } from '../../model/EventsModel';
import NoticeTableRow from '../NoticeTableRow';


const Card = () => {
  const wideScreenQuery = useMediaQuery({
    query: '(min-device-width: 700px)'
  });
  const obj = EventsSingleton.getInstance();
  const data = obj.getAllEvents();

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
          data.map((data, index) => data.notice ? (

            <NoticeTableRow data={{
              attachment: [{ poster: data.poster }, { result: data.result }],
              date: data.start.split(',')[0],
              id: index + 1,
              organiser: data.organiser,
              event: data.title,
              time: data.start.split(',')[1],
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
        data.map((data, index) => data.notice ? (
          <NoticeTableRow data={{
            attachment: [{ poster: data.poster }, { result: data.result }],
            date: data.start.split(',')[0],
            id: index + 1,
            organiser: data.organiser,
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
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Ellipsis />
          {wideScreenQuery ? <><Pagination.Item disabled >{10}</Pagination.Item>
            <Pagination.Item >{11}</Pagination.Item></> : <></>
          }
          <Pagination.Item active >{12}</Pagination.Item>
          {wideScreenQuery ? <><Pagination.Item >{13}</Pagination.Item>
            <Pagination.Item disabled >{14}</Pagination.Item></> : <></>}
          <Pagination.Ellipsis />
          <Pagination.Next />
          <Pagination.Last />
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
