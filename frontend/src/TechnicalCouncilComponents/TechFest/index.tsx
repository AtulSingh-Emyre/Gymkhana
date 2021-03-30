import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import "./styles.css"
const TechFest = () => {
    return (
        <div style={{width:'100%'}}>
                <div style={{color:'white', 
                textAlign:'center',
                width:'100%', 
                backgroundImage:`url(${require('../../assets/Technical Council/Parsec.jpg')})`, 
                minHeight:500,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                margin:'auto'
                }}>
                   <Parallax renderLayer={(precentage:any) => (
                        <div style={{width:'100%', height:450}}>
                            <div 
                            style={{
                            position: 'absolute',
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: `rgba(255, 123, 23, ${1-precentage * 0.5})`,
                            left: '50%',
                            top: '100%',
                            transform: `translate(-50%, -50%) scale(${precentage * 10})`,
                            }} /></div>)}>
                    <Button>Know More</Button>
                   </Parallax>
                </div>
        </div>
    );
}

const inlineStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
  }

export default TechFest;
