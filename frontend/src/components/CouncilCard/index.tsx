import React from 'react';
import { Card } from 'react-bootstrap';

const CouncilCard = (props:{data:{title:string, desc:string}}) => {
    return (
        <div>
           <Card border="secondary" style={{ width: '95%', margin:'auto' }}>
    <Card.Body>
      <Card.Title>{props.data.title}</Card.Title>
      <Card.Text>
        {props.data.desc}
      </Card.Text>
    </Card.Body>
  </Card>
   
        </div>
    );
}

export default CouncilCard;
