import React from 'react';
import { Row, Col, Card, Image, CardColumns, Button } from 'react-bootstrap';

interface IProps {
  person:{
  name: string;
  phone: number;
  email: string;
  councilPost: string;
  website: string;
  image: string;
  }
}
const MemberCard : React.FC<IProps> = (props: IProps) => {
    return (
        <Card style={{ alignItems:'center',alignSelf:'center' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/ca/35/1a/ca351aa5a5f238f94878240f2dbb673f.jpg" />
          <Card.Body style={{alignItems:'center',alignSelf:'center'}}>
            <Card.Title style={{color:'black', alignItems:'center', alignSelf:'center'}} >
              <h5>General Secretary</h5>
              <h5>{props.person.councilPost}</h5>
              </Card.Title>
            <Card.Text>
              {props.person.name}
              {props.person.phone}
              {props.person.email}
            </Card.Text>
            <Button variant="primary">{props.person.website}</Button>
          </Card.Body>
        </Card>
    );
}

export default MemberCard;
