import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { IEvent } from '../../model/EventsModel';
import './style.css';

interface IProp {
    event : IEvent,
    editable : boolean
}


const SelectedEventCard : React.FC<IProp> = (props) => {
    return (
    <Card  className='selectedCard' >
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
            <Button>Edit</Button>
        </Card.Body>
    </Card>
    );
}

export default SelectedEventCard;
