import React from 'react';
import { Row, Col, Card, Image, CardColumns, Button } from 'react-bootstrap';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import MemberCard from '../MemberCard';
import './style.css'

const temp = [
  {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  }, {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  }, {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  }, {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    image: ''
  }
]

// interface IdeviceInfo {
//   isDesktopOrLaptop : boolean,
//   isBigScreen : boolean,
//   isTabletOrMobile : boolean,
//   isTabletOrMobileDevice : boolean,
//   isPortrait : boolean,
//   isRetina : boolean
// }

interface IProps {
  // deviceInfo: IdeviceInfo
}

const Details: React.FC<IProps> = (props: IProps) => {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 250px)' })
  
  
  const wideScreenDeviceView = (<div style={container}>
  <Row style={row_style}>
    <Col 
    xs={4} md={3} 
    style={col_style}
    >
      <MemberCard person={temp[0]} />
    </Col>
    <Col 
    xs={4} md={3} 
    style={col_style}    >
      <MemberCard person={temp[2]} />
    </Col>
    <Col 
    xs={4} md={3} 
    style={col_style}>
      <MemberCard person={temp[1]} />
    </Col>
    <Col xs={3} md={3} 
        style={col_style}>
      <MemberCard person={temp[1]} />
    </Col>
    <Col xs={3} md={3} 
        style={col_style}>
      <MemberCard person={temp[3]} />
    </Col>
  </Row>
</div>);
  return (
    <>
    {
    wideScreenDeviceView
    } 
    </>
  );
};
const container : React.CSSProperties = {
  // minHeight: '300px',
  maxWidth: '100%',
  paddingTop: '5%',
  // paddingBottom: '5%'
}

const row_style : React.CSSProperties = {
  height: '100%',
  margin: 'auto',
  padding: '3%',
  maxWidth: '100%',
}

const col_style : React.CSSProperties = {
  height: '100%',
  margin: 'auto',
  padding: '1%',
  maxWidth: '250px',
  minWidth: '250px',
  maxHeight: '400px',
  minHeight: '350px',
} 
const col_style_small : React.CSSProperties = {
  // minWidth: '100%',
}
export default Details;
