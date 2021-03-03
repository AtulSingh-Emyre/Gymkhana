import { url } from 'inspector';
import React from 'react';
import { Row, Col, Card, Image, CardColumns, Button } from 'react-bootstrap';

interface IProps {
  person: {
    name: string;
    phone: number;
    email: string;
    councilPost: string;
    website: string;
    image: string;
  }
}
const MemberCard: React.FC<IProps> = (props: IProps) => {
  return (
    <Card style={body}>
      {/* <Card.Img variant="top" src="https://i.pinimg.com/originals/ca/35/1a/ca351aa5a5f238f94878240f2dbb673f.jpg" 
      style={{flex:1, padding:'5%', width:'80%'}}
      /> */}
      <Card.Body style={{ flex:1,  alignItems: 'center', alignSelf: 'center' }}>
        <Card.Title style={{ color: 'black', alignItems: 'center', alignSelf: 'center' }} >
          <h5>General Secretary</h5>
          <h5>{props.person.councilPost}</h5>
        </Card.Title>
        {/* <Card.Text>
          {props.person.name}<br />
          {props.person.phone}<br />
          {props.person.email}<br />
        </Card.Text> */}
        {/* <Button variant="primary">{props.person.website}</Button> */}
      </Card.Body>
    </Card>
  );
}

const img : React.CSSProperties = {
  flex:1
}
const body : React.CSSProperties = {
  backgroundImage : `url('https://i.pinimg.com/originals/ca/35/1a/ca351aa5a5f238f94878240f2dbb673f.jpg')`,
  flex:1, 
  justifyContent:'center',
  justifySelf:'center', 
  alignItems:'center',
  height:'100%' 
}

export default MemberCard;
