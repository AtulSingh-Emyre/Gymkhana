import { url } from 'inspector';
import React, { useState } from 'react';
import { Row, Col, Card, Image, CardColumns, Button } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';

const animate = require('react-animations');


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
      {
        hover? (<></>
      ) : (
          <Card.Body style={{ flex:1,  alignItems: 'center', alignSelf: 'center' }}>
            <Card.Title style={{ color: 'black', alignItems: 'center', alignSelf: 'center' }} >
              <h5>General Secretary</h5>
              <h5>{props.person.councilPost}</h5>
            </Card.Title>
          </Card.Body>)
      }
    </Card>
  );
}

const styles = StyleSheet.create({
  hoverBody: {
    // animationName: animate.bounce,
    // animationDuration: '1s',
    backgroundColor: 'red',
  }
})





// const hoverBody : React.CSSProperties = {
//   backgroundColor: 'red',
//   backg
// }
const body : React.CSSProperties = {
  backgroundImage : `url('https://i.pinimg.com/originals/ca/35/1a/ca351aa5a5f238f94878240f2dbb673f.jpg')`,
  height:'100%',
  minHeight: '300px',
  // padding: '20%',
  maxWidth: '100%',
  margin: 'auto'
}

export default MemberCard;
