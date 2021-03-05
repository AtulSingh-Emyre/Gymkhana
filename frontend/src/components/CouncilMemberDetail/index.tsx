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
    name: 'Durga Naga Sai Rahul M',
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
  }, {
    name: 'Tella Rajashekar Reddy',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Jr. General Secretary',
    website: '',
    image: ''
  }, {
    name: 'Tabish Khalid Halim',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Technical Affairs (Jr)',
    website: '',
    image: ''
  }, {
    name: 'Rahul Prajapat',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Sports Affairs (Jr)',
    website: '',
    image: ''
  }, {
    name: 'Smriti Jha',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Cultural Affairs (Jr)',
    website: '',
    image: ''
  }  , {
    name: 'Kamtekar Varad Mahesh',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Hostel Affairs (Jr)',
    website: '',
    image: ''
  }, {
    name: 'Sanghasheela',
    phone: 7892128329,
    email: 'abc@g.c',
    councilPost: 'Mess Affairs (Jr)',
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
    {
      temp.map(data => 
        ( <Col 
        xs={3} md={3} 
        style={col_style}
        >
          <MemberCard person={data} />
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
