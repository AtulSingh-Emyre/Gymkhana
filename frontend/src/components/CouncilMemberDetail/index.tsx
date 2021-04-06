import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import MemberCard from '../MemberCard';
import './style.css'

const data = [
  {
    name: 'Mummaneni Sai Harsha',
    phone: 7337031100,
    email: 'gsacad@iitdh.ac.in',
    councilPost: 'Academic Affairs',
    website: '',
    linkedIn: '',
    insta: '',
    image: ''
  }, {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: '',
    linkedIn: '',
    insta: '',
    image: ''
  }, {
    name: 'Gowri Y Subedar',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Cultural Affairs',
    website: '',
    linkedIn: '',
    insta: '',
    image: ''
  },
  {
    name: 'Durga Naga Sai Rahul M',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Hostel Affairs',
    website: '',
    linkedIn: '',
    insta: '',
    image: ''
  }, {
    name: 'Yogesh Dhyani',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Sports Affairs',
    website: '',
    linkedIn: '',
    insta: '',
    image: ''
  }, {
    name: 'Savsaviya Brinal Sureshbhai',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Mess Secretary',
    website: '',
    linkedIn: '',
    insta: '',
    image: 'images.png'
  }
]

interface IProps {
}

const Details: React.FC<IProps> = (props: IProps) => {
  const wideScreenDeviceView = (<div style={container}>
    {/* <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Office Bearers 2021-22</h2> */}
    <Row style={row_style}>
      {
        data.map((council) => (
          <Col
            xs={12} md={6} xl={4}
            style={col_style}
          >
            <MemberCard person={council} />
          </Col>
        ))
      }
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
const container: React.CSSProperties = {
  minHeight: '150%',
  maxWidth: '100%',
  paddingTop: '5%',
  position: 'relative',
  height:'fit-content'
  // paddingBottom: '5%'
}

const row_style: React.CSSProperties = {
  height: '100%',
  margin: 'auto',
  padding: '3%',
  maxWidth: '100%',
}

const col_style: React.CSSProperties = {
  height: 'auto',
  margin: 'auto',
  padding: '3.4%',
  maxWidth: '450px',
}

export default Details;
