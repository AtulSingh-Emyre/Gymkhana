import React from 'react';
import { Card } from 'react-bootstrap';

import { styleSheet } from './styles';

interface Iprops {
  data: {
    title: string,
    desc: string
  }
}

const CouncilCard = (props:Iprops) => {
  return (
    <div>
      <Card border="secondary" style={styleSheet.card}>
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
