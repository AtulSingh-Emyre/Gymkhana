import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { IEvent } from '../../model/EventsModel';
import { CalendarEventRepository } from '../../services/CalendarEventServices';
import Admininputform from '../Admininputform';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';

interface IProp {
    event : any,
    editable : boolean
}


const SelectedEventCard : React.FC<IProp> = (props) => {
    const [visible, setvisible] = useState(false);

    const modal = (<Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Admininputform postData={props.event} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setvisible(false)}>
            Close
          </Button>
        </Modal.Footer>  
      </Modal.Dialog>)
    
    const deleteEvent = async () => {
       try{
         await CalendarEventRepository.deleteEvents(props.event._id)
         toast("EVENT DELETED SUCCESSFULLY, PLEASE RELOAD PAGE TO VIEW CHANGES")
       }
       catch(e) {
        toast("SOMETHING WENT WRONG, PLEASE RELOAD PAGE AND TRY AGAIN")
             
       }
    }
    return (
    <Card  className='selectedCard' >
        <ToastContainer />
        <Card.Body  className='selectedCard' >
            <Card.Title>{props.event.title}</Card.Title>
            <Card.Text>
                Organized by: {props.event.organiser} , {props.event.council}
            </Card.Text>
            <Card.Text>
                {props.event.start} - {props.event.end}
            </Card.Text>
            <Card.Text>
                {props.event.description}
            </Card.Text>
            <Card.Link href={props.event.poster}>Poster</Card.Link>
            <Card.Link href={props.event.result}>Result</Card.Link>
            <Button onClick={() => setvisible(true)} >Edit</Button> <Button onClick={deleteEvent}>Delete</Button>
        </Card.Body>
        {visible?modal:<></>}
    </Card>
    );
}

export default SelectedEventCard;
