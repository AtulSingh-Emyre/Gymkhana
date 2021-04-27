import React, { useState } from 'react'
// @ts-ignore
import { CardView } from 'react-card-with-image';
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-card-with-image/dist/index.css';
import 'react-stacked-carousel/dist/index.css';
import './style.css';

const Clubs = () => {
  const [card, setCard] = useState(null);
  const onCardChange = (event: any) => {
    console.log("Card", event);
  }
  
  return (
    <div className="main">
      <StackedCarousel
        autoRotate={true}
        rotationInterval={2000}
        onCardChange={onCardChange}
        containerClassName={"container"}
        cardClassName="card"
        style={{...stile}}
      >
        <div key={'child1'}>
          <h2><u><strong>{info[0].clubname}</strong></u></h2>
          <h5>{info[0].secyname}</h5>
          <p>{info[0].clubdesc}</p>
        </div>
        <div key={'child2'}>
          <h2><u><strong>{info[1].clubname}</strong></u></h2>
          <h5>{info[1].secyname}</h5>
          <p>{info[1].clubdesc}</p>
        </div>
        <div key={'child3'}>
          <h2><u><strong>{info[2].clubname}</strong></u></h2>
          <h5>{info[2].secyname}</h5>
          <p>{info[2].clubdesc}</p>
        </div>
        <div key={'child4'}>
          <h2><u><strong>{info[3].clubname}</strong></u></h2>
          <h5>{info[3].secyname}</h5>
          <p>{info[3].clubdesc}</p>
        </div>
        <div key={'child5'}>
          <h2><u><strong>{info[4].clubname}</strong></u></h2>
          <h5>{info[4].secyname}</h5>
          <p>{info[4].clubdesc}</p>
        </div>
        <div key={'child6'}>
          <h2><u><strong>{info[5].clubname}</strong></u></h2>
          <h5>{info[5].secyname}</h5>
          <p>{info[5].clubdesc}</p>
        </div>
        <div key={'child7'}>
          <h2><u><strong>{info[6].clubname}</strong></u></h2>
          <h5>{info[6].secyname}</h5>
          <p>{info[2].clubdesc}</p>
        </div>
        <div key={'child8'}>
          <h2><u><strong>{info[7].clubname}</strong></u></h2>
          <h5>{info[7].secyname}</h5>
          <p>{info[7].clubdesc}</p>
        </div>
        <div key={'child9'}>
          <h2><u><strong>{info[8].clubname}</strong></u></h2>
          <h5>{info[8].secyname}</h5>
          <p>{info[8].clubdesc}</p>
        </div>
        <div key={'child10'}>
          <h2><u><strong>{info[9].clubname}</strong></u></h2>
          <h5>{info[9].secyname}</h5>
          <p>{info[9].clubdesc}</p>
        </div>
        <div key={'child11'}>
          <h2><u><strong>{info[10].clubname}</strong></u></h2>
          <h5>{info[10].secyname}</h5>
          <p>{info[10].clubdesc}</p>
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