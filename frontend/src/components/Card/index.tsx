import React from 'react';
import { Container,Table, } from 'react-bootstrap';


const Card = () => {
  return (
    
    <Container className="my-5">
      <div className="my-5">
        <h3>CLUB NOTICES</h3>
      </div>
      <Table striped bordered hover>
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td >Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Card
