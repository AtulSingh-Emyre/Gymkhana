import React, { useState } from 'react';
import { Row, Col, Card, Image, CardColumns, Button, Container, CardDeck } from 'react-bootstrap';

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
  const [hover, sethover] = useState(false);
  const onMouseEnter = () => sethover(true);
  const onMouseLeave = () => sethover(false)
  return (  
   <Card style={body} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
      <Card.Img 
      src = 'https://i.pinimg.com/originals/ca/35/1a/ca351aa5a5f238f94878240f2dbb673f.jpg' 
      style={img}

      >
      </Card.Img>
      <Card.Body>
        <Card.Title>{props.person.name}</Card.Title>
        <Card.Subtitle>General Secretary, {props.person.councilPost}</Card.Subtitle>
        <Card.Text>
            {props.person.phone}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const textCenter : React.CSSProperties = {
  alignSelf:'center',
  textAlign:'center',
  margin:'auto'
}

const hoverBody: React.CSSProperties = {
  backgroundColor: 'blue',
  opacity:0.5,
  width:'100%',
  height:'100%',
}

const unHoverTitle : React.CSSProperties = {
  color: 'black', 
  alignItems: 'center', 
  alignSelf: 'center', 
  backgroundColor:'green', 
  width:'100%',
  position:'absolute', 
  bottom:0,
  padding:1,
  margin:'auto',
  fontSize:15
}

const img: React.CSSProperties = {
  height: 220,
  width: 220,
}

const body : React.CSSProperties = {
  // backgroundImage : `url('https://i.pinimg.com/originals/ca/35/1a/ca351aa5a5f238f94878240f2dbb673f.jpg')`,
  height:'100%',
  minHeight: '300px',
  padding: '0%',
  maxWidth: '100%',
  margin: 'auto',
  overflow: 'hidden',
  
}

export default MemberCard;
