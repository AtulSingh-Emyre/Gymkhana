import React from 'react';
import { Row, Col, Card, Image, CardColumns, Button, Container } from 'react-bootstrap';
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
    name: 'M Sai Harsha',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Academic Affairs',
    website: '',
    image: ''
  }, {
    name: 'Gowri Y Subedar',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Cultural Affairs',
    website: '',
    image: ''
  }, {
    name: 'Sai Rahul M',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Hostel Affairs',
    website: '',
    image: ''
  }, {
    name: 'Yogesh Dhyani',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Sports Affairs',
    website: '',
    image: ''
  }, {
    name: 'Savsaviya Brinal Sureshbhai',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Sports Affairs',
    website: '',
    image: ''
  }      
]

interface IProps {
}

const Details: React.FC<IProps> = (props: IProps) => {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 250px)' })  
  const wideScreenDeviceView = (
  <div style={container}>
    {/* <Container style={{padding:'5%', width:'100%'}}> */}
    <h5 style={{textAlign:'center', alignSelf:'center'}}> Office Bearers 2021-22</h5>
    <Row style={row_style}>
    {
      temp.map(data => 
        ( <Col 
        xs={10} md={6} xl={4}
        style={col_style}
        >
          <MemberCard person={data} />
        </Col>    
      ))
    }
  </Row>
  {/* </Container> */}
</div>
);
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
  // padding: '3%',
  maxWidth: '100%',
}

const col_style : React.CSSProperties = {
  height: '100%',
  margin: 'auto',
  padding: '1%',
  maxWidth: '293px',
} 
const col_style_small : React.CSSProperties = {
  // minWidth: '100%',
}
export default Details;
