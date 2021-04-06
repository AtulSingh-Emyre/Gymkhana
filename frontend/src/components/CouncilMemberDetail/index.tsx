import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import MemberCard from '../MemberCard';
import techImg from '../../assets/CouncilMems/gs-Tech.jpg';
import acadImg from '../../assets/CouncilMems/gs-Acad.jpg';
import cultImg from '../../assets/CouncilMems/gs-Cult.jpg';
import hostelImg from '../../assets/CouncilMems/gs-Hostel.jpg';
import sportsImg from '../../assets/CouncilMems/gs-Sports.jpg';
import messImg from '../../assets/CouncilMems/gs-Mess.jpg';
import './style.css'

const data = [
  {
    name: 'Mummaneni Sai Harsha',
    phone: 7337031100,
    email: 'gsacad@iitdh.ac.in',
    councilPost: 'Academic Affairs',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/',
    insta: 'https://www.instagram.com/',
    image: acadImg
  }, {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/',
    insta: 'https://www.instagram.com/',
    image: techImg
  }, {
    name: 'Gowri Y Subedar',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Cultural Affairs',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/',
    insta: 'https://www.instagram.com/',
    image: cultImg
  },
  {
    name: 'Durga Naga Sai Rahul M',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Hostel Affairs',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/',
    insta: 'https://www.instagram.com/',
    image: hostelImg
  }, {
    name: 'Yogesh Dhyani',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Sports Affairs',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/',
    insta: 'https://www.instagram.com/',
    image: sportsImg
  }, {
    name: 'Savsaviya Brinal Sureshbhai',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Mess Secretary',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/',
    insta: 'https://www.instagram.com/',
    image: messImg
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
