import React from 'react';
import { Container,Pagination,Table, } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import NoticeTableRow from '../NoticeTableRow';


const Card = () => {
  const wideScreenQuery = useMediaQuery({
    query: '(min-device-width: 700px)'
  });
  const data = [
    {
        event: '12345678901234567890',
        organiser: 'AI Club',
        date: '7/03/2020',
        time: '5:30pm',
        venue: 'Room 23',
        poster: 'www.google.com',
        result: 'www.google.com'
    },
    {
      event: 'weekly gambit arena',
        organiser: 'Chess Club',
        date: '8/03/2020',
        time: '5:30pm',
        venue: 'Board games room',
        poster: 'www.google.com',
        result: 'www.google.com'
    }, {
      event: 'Coding hackathon',
        organiser: 'Coding club',
        date: '15/03/2020',
        time: '6:30pm',
        venue: 'Room 23',
        poster: 'www.google.com',
        result: 'www.google.com'
    }  
  ]
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
        data.map( (data,index) => (
          <NoticeTableRow  data={{
            attachment:[{poster: data.poster},{result:data.result}],
            date: data.date,
            id: index+1,
            organiser: data.organiser,
            event: data.event,
            time: data.time,
            venue: data.venue
          }} />
        ))
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
        data.map( (data,index) => (
          <NoticeTableRow  data={{
            attachment:[{poster: data.poster},{result:data.result}],
            date: data.date,
            id: index+1,
            organiser: data.organiser,
            }} />
        ))
      }
    </tbody>
    </Table>
    );

  return (
    <Container style={container}>
      <div className="my-5">
        <h3>CLUB NOTICES</h3>
      </div>
      {
        wideScreenQuery? wideScreenView: semiWideScreenView
      }
      <Pagination style={pagination}>
        <div style={autoMargin}>
        <Pagination.First  />
        <Pagination.Prev />
        <Pagination.Ellipsis />
        {wideScreenQuery? <><Pagination.Item disabled >{10}</Pagination.Item>
        <Pagination.Item >{11}</Pagination.Item></>:<></>
        }
        <Pagination.Item active >{12}</Pagination.Item>
        {wideScreenQuery? <><Pagination.Item >{13}</Pagination.Item>
        <Pagination.Item disabled >{14}</Pagination.Item></>:<></>}
        <Pagination.Ellipsis />
        <Pagination.Next />
        <Pagination.Last />
        </div>
      </Pagination>
    </Container>
  )
}

const container: React.CSSProperties = {
  maxWidth : '100%',
}
const pagination: React.CSSProperties = {
  width : '100%',
  alignSelf: 'center',
  margin: 'auto',
  alignContent: 'center',
  // backgroundColor: 'black'
} 
const autoMargin: React.CSSProperties = {
  margin: 'auto',
  display:'flex',
  flexDirection: 'row'
}
export default Card
