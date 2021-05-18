import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import MemberCard from '../MemberCard';
import techImg from '../../assets/CouncilMems/gs-Tech.jpg';
import acadImg from '../../assets/CouncilMems/gs-Acad.jpg';
import cultImg from '../../assets/CouncilMems/gs-Cult.jpg';
import hostelImg from '../../assets/CouncilMems/gs-Hostel.jpg';
import sportsImg from '../../assets/CouncilMems/gs-Sports.jpg';
import messImg from '../../assets/CouncilMems/gs-Mess.png';
import './style.css'

const data = [
  {
    name: 'Mummaneni Sai Harsha',
    phone: 7337031100,
    email: 'gsacad@iitdh.ac.in',
    councilPost: 'Academic Affairs',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/in/mummaneni-sai-harsha-725a691a0/',
    insta: 'https://www.instagram.com/___harsha.chowdhary___/',
    image: acadImg
  }, {
    name: 'Atul Singh',
    phone: 7892128329,
    email: 'gstech@iitdh.ac.in',
    councilPost: 'Technical Affairs',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/',
    insta: 'https://www.instagram.com/atulsingh.pks/',
    image: techImg
  }, {
    name: 'Gowri Y Subedar',
    phone: 8277522336,
    email: 'gscult@iitdh.ac.in',
    councilPost: 'Cultural Affairs',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/',
    insta: 'https://www.instagram.com/gowrisubedar',
    image: cultImg
  },
  {
    name: 'Durga Naga Sai Rahul M',
    phone: 7892128329,
    email: 'gsha@iitdh.ac.in',
    councilPost: 'Hostel Affairs',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/',
    insta: 'https://www.instagram.com/',
    image: hostelImg
  }, {
    name: 'Yogesh Dhyani',
    phone: 7892128329,
    email: 'gssports@iitdh.ac.in',
    councilPost: 'Sports Affairs',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/in/yogesh-dhyani-b0a1511ab/',
    insta: 'https://www.instagram.com/yogesh_dhyani0945',
    image: sportsImg
  }, {
    name: 'Savsaviya Brinal S',
    phone: 7892128329,
    email: 'messcommittee@iitdh.ac.in',
    councilPost: 'Mess Affairs',
    website: 'https://www.google.com/',
    linkedIn: 'https://www.linkedin.com/in/brinal-savsaviya-b851a5193/?originalSubdomain=in',
    insta: 'https://www.instagram.com/brinal_8055',
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
