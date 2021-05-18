import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import { CalendarEventRepository } from '../../services/CalendarEventServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface IProp{
  postData? : any;
}

const Admininputform = (props: IProp) => {
  const [error, seterror] = useState({
    title: false,
    council: false,
    description: false,
    venue:false,
    organizer: false
  });
  const [errMssg, seterrMssg] = useState("");
  const [state, setState] = useState({
    title: props.postData?props.postData.title:"",
    council: props.postData?props.postData.council:"",
    organizer: props.postData?props.postData.organizer:"",
    description: props.postData?props.postData.description: "",
    venue: props.postData?props.postData.venue:"",
    poster: props.postData?props.postData.poster:"",
    result: props.postData?props.postData.result:"",
    notice: false,
    allDay: false,
  })
  const [start, setstart] = useState(new Date());
  const [end, setend] = useState(new Date());
  const update = async () => {
    try{
      if(state.title.length == 0) {
        seterror({...error, title:true});
        toast("Please enter a title");
        return;
      }
      else if(state.council.length == 0) {
        seterror({...error, council:true});
        toast("Please enter the name of the council");
        return;
      } 
      else if(state.description.length == 0) {
        seterror({...error, description:true});
        toast("Please enter the description of the event");
        return;
      }
      else if(state.organizer.length == 0) {
        toast("Please enter the name of the organising body");
        seterror({...error, organizer:true});
        return;
      }
      else if(state.venue.length == 0) {
        toast("Please enter the venue for the event");
        seterror({...error, venue:true});
        return;
      }      
      await CalendarEventRepository.updateEvents(props.postData._id,{
        ...state,
        start,
        end
      });
      toast("SUBMISSION SUCCESSFUL, PLEASE RELOAD PAGE TO VIEW CHANGES")
    }
    catch (e) {
      toast("SUBMISSION NOT SUCCESSFUL, PLEASE RELOAD PAGE AND TRY AGAIN")
    }
  }

  const submit = async () => {
    try{
      if(state.title.length == 0) {
        seterror({...error, title:true});
        toast("Please enter a title");
        return;
      }
      else if(state.council.length == 0) {
        seterror({...error, council:true});
        toast("Please enter the name of the council");
        return;
      } 
      else if(state.description.length == 0) {
        seterror({...error, description:true});
        toast("Please enter the description of the event");
        return;
      }
      else if(state.organizer.length == 0) {
        toast("Please enter the name of the organising body");
        seterror({...error, organizer:true});
        return;
      }
      else if(state.venue.length == 0) {
        toast("Please enter the venue for the event");
        seterror({...error, venue:true});
        return;
      }      
      await CalendarEventRepository.postEvents({
        ...state,
        start,
        end
      });
      toast("SUBMISSION SUCCESSFUL, PLEASE RELOAD PAGE TO VIEW CHANGES")
    
    }
    catch (e) {
      toast("SUBMISSION NOT SUCCESSFUL, PLEASE RELOAD PAGE AND TRY AGAIN")
    
      console.log(e);
    }
  }

  
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
    seterror({
      ...error,
      [e.target.name]: false,
    })
  }
  const handleChangeCheckAllDay = (e:any) => {
    setState({...state, allDay: e.target.checked});
    console.log(e.target.checked); 
  }

  const handleChangeCheckNotice = (e:any) => {
    setState({...state, notice: e.target.checked});
    console.log(e.target.checked); 
  }

  return (
    <div >
      <h2 style={{ margin: '25px', textAlign: 'center' }}>Add Events</h2>
      <div style={{ margin: '15px' }}>
        <ToastContainer />
        <Form>
          <Form.Group controlId="formBasicevent">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" placeholder="Enter event name" name="title" value={state.title} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicCouncil">
            <Form.Label>Council</Form.Label>
            <Form.Control type="text" placeholder="Enter council name" name="council" value={state.council} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicorganizer">
            <Form.Label>Organizer</Form.Label>
            <Form.Control type="text" placeholder="Enter organizer name" name="organizer" value={state.organizer} onChange={handleChange} />
          </Form.Group>
          <Row>
            <Col xl={6} md={6} xs={12}>
            <Form.Group controlId="formBasicStartDate">
            <Form.Label>Event Start Date and time</Form.Label>
            <br />
            <DateTimePicker
              onChange={setstart}
              value={start}
            />
          </Form.Group>

            </Col>
            <Col xl={6} md={6} xs={12}>
            <Form.Group controlId="formBasicEndDate">
            <Form.Label>Event End Date and time</Form.Label>
            <br />
            <DateTimePicker
              onChange={setend}
              value={end}
            />
          </Form.Group>
              
            </Col>

          </Row>
          <Form.Group controlId="formBasicroom">
            <Form.Label>Venue</Form.Label>
            <Form.Control type="text" placeholder="Enter Room number" name="venue" value={state.venue} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description of event" name="description" value={state.description} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicroom">
            <Form.Label>Poster</Form.Label>
            <Form.Control type="text" placeholder="Insert drive link to poster" name="poster" value={state.poster} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicroom">
            <Form.Label>Result</Form.Label>
            <Form.Control type="text" placeholder="Insert drive link to results" name="result" value={state.result} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicroom">
          <Row>
          <Col xs={10} md={11} xl={11} >
          Event is a Deadline  
          </Col>
          <Col xs = {2} md = {1} xl={1}>
            <Form.Control type="checkbox" name="deadline" onChange={handleChangeCheckAllDay} />
          </Col>  
            
          </Row>  
          <br />
          <Row>
            <Col xs={10} md={11} xl={11} >
              Include In Notices  
            </Col>
            <Col xs = {2} md = {1} xl={1}>
              <Form.Control type="checkbox" name="notice" onChange={handleChangeCheckNotice} /> 
            </Col>    
          </Row>              
          </Form.Group>
        </Form>
      </div>
      <div style={{ margin: '25px', textAlign: 'center' }}>
       {props.postData?<Button variant="primary" type="submit" onClick={update}>
          Update
        </Button>:<Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>} 
      </div>
    </div>
  )
};

export default Admininputform;
