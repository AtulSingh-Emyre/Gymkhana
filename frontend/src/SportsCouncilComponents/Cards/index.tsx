import React from 'react'
// @ts-ignore
import { CardView } from 'react-card-with-image';
import 'react-card-with-image/dist/index.css';
import './style.css';

interface club {
  id: number;
  clubname: string;
  memblink: string;
  logo: string;
  contactdetails: string;
  clubdesc: string;
}

interface Iprops{
  info : club;
}

const info = [
  {
      id: "1",
      clubname: "Athletic Club",
      secyname:  "Shivam Kumar",
      memblink: "google",
      logo: "logo.png",
      Contactdetails: "123456 123456",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
      id: "2",
      clubname: "Badminton Club",
      secyname:  "Saloni Singh",
      memblink: "google",
      logo: "logo.png",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
      id: "3",
      clubname: "Basketball Club",
      secyname: "Vaibhav Mishra",
      memblink: "google",
      logo: "logo.png",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
      id: "4",
      clubname: "Board Games Club",
      secyname:  "Aditya Kalyani",
      memblink: "google",
      logo: "logo.png",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
      id: "5",
      clubname: "Cricket Club",
      secyname:  "Mohit Jorwal",
      memblink: "google",
      logo: "logo.png",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
      id: "6",
      clubname: "Football Club",
      secyname:  "Aneesh Bendale",
      memblink: "google",
      logo: "logo.png",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
      id: "7",
      clubname: "Hockey Club",
      secyname:  "Karu Jagadeesh",
      memblink: "google",
      logo: "logo.png",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
      id: "8",
      clubname: "Table Tennis Club",
      secyname:  "Shivaram H G",
      memblink: "google",
      logo: "logo.png",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  
  {
      id: "9",
      clubname: "Tennis Club",
      secyname:  "Mohammed Huzaif Barkati",
      memblink: "google",
      logo: "logo.png",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
      id: "10",
      clubname: "Volleyball Club",
      secyname:  "Cheryala Rohith",
      memblink: "google",
      logo: "logo.png",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
      id: "11",
      clubname: "Weightlifting Club",
      secyname:  "Balsher Singh",
      memblink: "google",
      logo: "logo.png",
      clubdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]

const Clubs = () => {
  return (
    <div style={{...stile}}>

    </div>
  )
}

const stile: React.CSSProperties = {
  width: '450px',
  height: '300px',
  backgroundColor: 'white',
  borderRadius: '10px',
  position:'absolute',
  transform: 'translate(-50%, -50%)'
}

export default Clubs;