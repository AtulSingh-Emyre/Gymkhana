import React, { useState } from 'react'
// @ts-ignore
import { CardView } from 'react-card-with-image';
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-card-with-image/dist/index.css';
import 'react-stacked-carousel/dist/index.css';
import './style.css';
import { MDBRow } from 'mdbreact';

const Clubs = () => {
  const [card, setCard] = useState(null);
  const onCardChange = (event: any) => {
    console.log("Card", event);
  }
  const [hover, setHover] = useState(false);
  
  return (
    <div className="main" style={{ width:'100%'}} onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
      <StackedCarousel
        autoRotate={!hover}
        rotationInterval={3000}
        onCardChange={onCardChange}
        containerClassName="coll"
        cardClassName="data"
        leftButton={<button style={{background: 'transparent', border: 'none', color: '#1f4baa', fontWeight: 'bold'}}>{"<"}</button>}
        rightButton={<button style={{background: 'transparent', border: 'none', color: '#1f4baa', fontWeight: 'bold'}}>{">"}</button>}
        style={{width: '90%', height: '100%', minHeight: '320px'}}
      >
        <div className="element" key={'child1'}>
          <h2>{info[0].clubname}</h2>
          <h5>{info[0].secyname}</h5>
          <p style={{fontSize: '15px'}}>{info[0].clubdesc}</p>
        </div>
        <div className="element" key={'child2'}>
          <h2>{info[1].clubname}</h2>
          <h5>{info[1].secyname}</h5>
          <p style={{fontSize: '15px'}}>{info[1].clubdesc}</p>
        </div>
        <div className="element" key={'child3'}>
          <h2>{info[2].clubname}</h2>
          <h5>{info[2].secyname}</h5>
          <p style={{fontSize: '15px'}}>{info[2].clubdesc}</p>
        </div>
        <div className="element" key={'child4'}>
          <h2>{info[3].clubname}</h2>
          <h5>{info[3].secyname}</h5>
          <p style={{fontSize: '15px'}}>{info[3].clubdesc}</p>
        </div>
        <div className="element" key={'child5'}>
          <h2>{info[4].clubname}</h2>
          <h5>{info[4].secyname}</h5>
          <p style={{fontSize: '15px'}}>{info[4].clubdesc}</p>
        </div>
        <div className="element" key={'child6'}>
          <h2>{info[5].clubname}</h2>
          <h5>{info[5].secyname}</h5>
          <p style={{fontSize: '15px'}}>{info[5].clubdesc}</p>
        </div>
        <div className="element" key={'child7'}>
          <h2>{info[6].clubname}</h2>
          <h5>{info[6].secyname}</h5>
          <p style={{fontSize: '15px'}}>{info[6].clubdesc}</p>
        </div>
        <div className="element" key={'child8'}>
          <h2>{info[7].clubname}</h2>
          <h5>{info[7].secyname}</h5>
          <p style={{fontSize: '15px'}}>{info[7].clubdesc}</p>
        </div>
        <div className="element" key={'child9'}>
          <h2>{info[8].clubname}</h2>
          <h5>{info[8].secyname}</h5>
          <p style={{fontSize: '15px'}}>{info[8].clubdesc}</p>
        </div>
        <div className="element" key={'child10'}>
          <h2>{info[9].clubname}</h2>
          <h5>{info[9].secyname}</h5>
          <p style={{fontSize: '15px'}}>{info[9].clubdesc}</p>
        </div>
        <div className="element" key={'child11'}>
          <h2>{info[10].clubname}</h2>
          <h5>{info[10].secyname}</h5>
          <p style={{fontSize: '15px'}}>{info[10].clubdesc}</p>
        </div>
      </StackedCarousel>
    </div>
  )
}

const info = [
  {
      id: 1,
      clubname: "Athletic Club",
      secyname:  "Shivam Kumar",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
      id: 2,
      clubname: "Badminton Club",
      secyname:  "Saloni Singh",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
      id: 3,
      clubname: "Basketball Club",
      secyname: "Vaibhav Mishra",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
      id: 4,
      clubname: "Board Games Club",
      secyname:  "Aditya Kalyani",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
      id: 5,
      clubname: "Cricket Club",
      secyname:  "Mohit Jorwal",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
      id: 6,
      clubname: "Football Club",
      secyname:  "Aneesh Bendale",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
      id: 7,
      clubname: "Hockey Club",
      secyname:  "Karu Jagadeesh",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
      id: 8,
      clubname: "Table Tennis Club",
      secyname:  "Shivaram H G",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  
  {
      id: 9,
      clubname: "Tennis Club",
      secyname:  "Mohammed Huzaif Barkati",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
      id: 10,
      clubname: "Volleyball Club",
      secyname:  "Cheryala Rohith",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
      id: 11,
      clubname: "Weightlifting Club",
      secyname:  "Balsher Singh",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  }
]

const stile: React.CSSProperties = {
  width: '450px',
  height: '300px',
  backgroundColor: 'white',
  borderRadius: '10px',
  position: 'absolute',
  top: '50px',
  left: '50%',
  transform:'translate(-50%, -50%)',
  boxSizing: 'border-box',
}

export default Clubs;