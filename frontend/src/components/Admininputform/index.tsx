import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const Admininputform = () => {

  const [state, setState] = useState({
    eventname: "",
    organiser: "",
    date: "",
    time: "",
    roomno: "",
  })
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div >
      <h2 style={{ margin: '25px', textAlign: 'center' }}>Add Events</h2>
      <div style={{ margin: '15px' }}>
        <Form>
          <Form.Group controlId="formBasicevent">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" placeholder="Enter event name" name="eventname" value={state.eventname} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicorganiser">
            <Form.Label>Organiser</Form.Label>
            <Form.Control type="text" placeholder="Enter organiser name" name="organiser" value={state.organiser} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicdate">
            <Form.Label>Event Date</Form.Label>
            <Form.Control type="date" name="date" value={state.date} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasictime">
            <Form.Label>Event time</Form.Label>
            <Form.Control type="time" name="time" value={state.time} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicroom">
            <Form.Label>Room No.</Form.Label>
            <Form.Control type="text" placeholder="Enter Room number" name="roomno" value={state.roomno} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicfile">
            <Form.Label>Add Attachement</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form>
      </div>
      <div style={{ margin: '25px', textAlign: 'center' }}>
        <Button variant="primary" type="submit">
          Submit
    </Button>
      </div>
    </div>
  )
};

export default Admininputform;
