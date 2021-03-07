import React, { useState } from 'react';
import { Row, Col, Card, Image, CardColumns, Button, Container, CardDeck } from 'react-bootstrap';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faMailchimp,
  faLinkedinIn,
  faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { IconPack } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css'
import { icons } from 'react-icons';
interface IProps {
  person: {
    name: string;
    phone: number;
    email: string;
    councilPost: string;
    website: string;
    image: string;
  }
}
const MemberCard: React.FC<IProps> = (props: IProps) => {
  const [hover, sethover] = useState(false);
  const onMouseEnter = () => sethover(true);
  const onMouseLeave = () => sethover(false)
  return (
   <Card style={body} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='Card'>
      <Card.Img
      src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/43217fe1-845a-4c3d-946e-caa1cb0e5651/d631lg1-848c2df7-b30e-4b23-b64b-213c7db89c4a.png/v1/fill/w_1024,h_1024,q_80,strp/code_geass__black_knight_symbol_by_marcfwl_d631lg1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDMyMTdmZTEtODQ1YS00YzNkLTk0NmUtY2FhMWNiMGU1NjUxXC9kNjMxbGcxLTg0OGMyZGY3LWIzMGUtNGIyMy1iNjRiLTIxM2M3ZGI4OWM0YS5wbmciLCJoZWlnaHQiOiI8PTEwMjQiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80MzIxN2ZlMS04NDVhLTRjM2QtOTQ2ZS1jYWExY2IwZTU2NTFcL21hcmNmd2wtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5e6QMAEkCi9IDH4ykhHPi_NpzKum6HYHhrxCsbOEzMU'
      style={img} className='cardImage'>
      </Card.Img>
      <Card.Body className='cardBody'>
        <Card.Title>{props.person.name}</Card.Title>
        <Card.Subtitle>General Secretary, {props.person.councilPost}</Card.Subtitle>
        <Card.Text>
            {props.person.phone}
        </Card.Text>
        <a href="https://www.youtube.com/c/jamesqquick"
          className="youtube social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com/learnbuildteach/"
          className="facebook social">
            <i className="fa fa-envelope" style={{fontSize:'48px' ,color:'red'}}></i>

          {/* <FontAwesomeIcon icon={fa fa-envelope} size="2x" /> */}
        </a>
        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
          <FontAwesomeIcon icon={'internet-explorer'} size="2x" />
        </a>
        {/* <a href="https://www.instagram.com/learnbuildteach"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a> */}
      </Card.Body>
    </Card>
  );
}

const textCenter : React.CSSProperties = {
  alignSelf:'center',
  textAlign:'center',
  margin:'auto'
}

const hoverBody: React.CSSProperties = {
  backgroundColor: 'white',
  opacity:0.5,
  width:'100%',
  height:'100%',
}

const unHoverTitle : React.CSSProperties = {
  color: 'black',
  alignItems: 'center',
  alignSelf: 'center',
  backgroundColor:'green',
  width:'100%',
  position:'absolute',
  bottom:0,
  padding:1,
  margin:'auto',
  fontSize:15
}

const img: React.CSSProperties = {
  // maxHeight: 258,
  // minHeight: 293,
  height: 'auto',
  width: '100%',
}

const body : React.CSSProperties = {
  // backgroundImage : `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/43217fe1-845a-4c3d-946e-caa1cb0e5651/d631lg1-848c2df7-b30e-4b23-b64b-213c7db89c4a.png/v1/fill/w_1024,h_1024,q_80,strp/code_geass__black_knight_symbol_by_marcfwl_d631lg1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDMyMTdmZTEtODQ1YS00YzNkLTk0NmUtY2FhMWNiMGU1NjUxXC9kNjMxbGcxLTg0OGMyZGY3LWIzMGUtNGIyMy1iNjRiLTIxM2M3ZGI4OWM0YS5wbmciLCJoZWlnaHQiOiI8PTEwMjQiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80MzIxN2ZlMS04NDVhLTRjM2QtOTQ2ZS1jYWExY2IwZTU2NTFcL21hcmNmd2wtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5e6QMAEkCi9IDH4ykhHPi_NpzKum6HYHhrxCsbOEzMU')`,
  height:'100%',
  minHeight: '300px',
  padding: '0%',
  maxWidth: '100%',
  margin: 'auto',
  overflow: 'hidden',

}

export default MemberCard;
