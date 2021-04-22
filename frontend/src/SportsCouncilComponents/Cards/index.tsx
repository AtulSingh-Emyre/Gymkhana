import React from 'react'
// @ts-ignore
import { CardView } from 'react-card-with-image';
import 'react-card-with-image/dist/index.css';
import './style.css';

interface Iprops {
  txt: string;
  color: string;
  num: number;
  x: number;
  y: number;
  z_index: number;
  scale: number;
}

const Clubs = (props: Iprops) => {
  return (
    <div style={{...stile,
      left: `${props.x}px`,
      top: `${props.y}px`,
      zIndex: props.z_index,
      transform: `translate(-50%, -50%) scale(${props.scale})`,
      backgroundColor: props.color,
      color: props.txt,
      textAlign: 'center',
      fontFamily: 'sans-serif',
      padding: '20px'
    }} className='card'>
      <h2><u><strong>{info[props.num].clubname}</strong></u></h2>
      <h5>{info[props.num].secyname}</h5>
      <p>{info[props.num].clubdesc}</p>
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
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
      id: 2,
      clubname: "Badminton Club",
      secyname:  "Saloni Singh",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
      id: 3,
      clubname: "Basketball Club",
      secyname: "Vaibhav Mishra",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
      id: 4,
      clubname: "Board Games Club",
      secyname:  "Aditya Kalyani",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
      id: 5,
      clubname: "Cricket Club",
      secyname:  "Mohit Jorwal",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
      id: 6,
      clubname: "Football Club",
      secyname:  "Aneesh Bendale",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
      id: 7,
      clubname: "Hockey Club",
      secyname:  "Karu Jagadeesh",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
      id: 8,
      clubname: "Table Tennis Club",
      secyname:  "Shivaram H G",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  
  {
      id: 9,
      clubname: "Tennis Club",
      secyname:  "Mohammed Huzaif Barkati",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
      id: 10,
      clubname: "Volleyball Club",
      secyname:  "Cheryala Rohith",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
      id: 11,
      clubname: "Weightlifting Club",
      secyname:  "Balsher Singh",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
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