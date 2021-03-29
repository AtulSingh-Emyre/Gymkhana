import { MDBCard } from 'mdbreact';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip'
import './styles.css';
import img1 from './Images/Dummy-image.jpg';
import img2 from './Images/Dummy-image.jpg';
import img3 from './Images/Dummy-image.jpg';

const Events = () => {

    const [Flipped1, setFlipped1] = useState(false);
    const [Flipped2, setFlipped2] = useState(false);
    const [Flipped3, setFlipped3] = useState(false);

    const event = (<>
    <div>
        <ReactCardFlip isFlipped={Flipped1} flipDirection="vertical">
            <div className='front' style={{width:'auto', height:'auto'}} onMouseEnter={() => setFlipped1(!Flipped1)}>
                <MDBCard className='round' style={{...jumb, width:'90%', height:'250px', backgroundColor:'black', margin:'auto', padding:20, backgroundImage:`url(${img1})`, backgroundSize:'350px 350px', backgroundRepeat:'no-repeat', backgroundPositionX:'right', backgroundPositionY:'center'}}>
                    <div style={{marginTop:'auto', marginBottom:'auto', marginLeft:'50px', color:'white'}}>
                    <h1 style={{textAlign:'left', fontFamily:'monospace', fontWeight:'bolder', fontSize:'50px'}}>CODE TOPIA 1</h1>
                    <hr color='white' style={{float:'left', width:'36%', height:'1px', borderRadius:'60px'}}/>
                    </div>
                </MDBCard>
            </div>
            <div className='back' style={{width:'auto', height:'auto '}} onMouseLeave={() => setFlipped1(!Flipped1)}>
                <MDBCard className='round' style={{...jumb, width:'90%', height:'250px', backgroundColor:'black', margin:'auto', padding:20}}>
                    <div style={{marginTop:'auto', marginBottom:'auto', marginLeft:'30px', marginRight:'30px', color:'white'}}>
                        <h1 style={{textAlign:'left', fontSize:'20px', fontWeight:'bolder'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Elementum tempus egestas sed sed risus pretium quam. Mattis rhoncus urna neque viverra justo. Facilisis gravida neque convallis a cras semper. Cursus euismod quis viverra nibh cras pulvinar. Nulla facilisi nullam vehicula ipsum a arcu. Mauris augue neque gravida in fermentum et. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.
                        </h1>
                    </div>
                </MDBCard>
            </div>
        </ReactCardFlip>
        <br/> <br/>
        <ReactCardFlip isFlipped={Flipped2} flipDirection="vertical">
            <div className='front' style={{width:'auto', height:'auto'}} onMouseEnter={() => setFlipped2(!Flipped2)}>
                <MDBCard className='round' style={{...jumb, width:'90%', height:'250px', backgroundColor:'black', margin:'auto', padding:20, backgroundImage:`url(${img2})`, backgroundSize:'350px 350px', backgroundRepeat:'no-repeat', backgroundPositionX:'right', backgroundPositionY:'center'}}>
                <div style={{marginTop:'auto', marginBottom:'auto', marginLeft:'50px', color:'white'}}>
                    <h1 style={{textAlign:'left', fontFamily:'monospace', fontWeight:'bolder', fontSize:'50px'}}>CODE TOPIA 2</h1>
                    <hr color='white' style={{float:'left', width:'36%', height:'1px', borderRadius:'60px'}}/>
                    </div>
                </MDBCard>
            </div>
            <div className='back' style={{width:'auto', height:'auto '}} onMouseLeave={() => setFlipped2(!Flipped2)}>
                <MDBCard className='round' style={{...jumb, width:'90%', height:'250px', backgroundColor:'black', margin:'auto', padding:20}}>
                    <div style={{marginTop:'auto', marginBottom:'auto', marginLeft:'30px', marginRight:'30px', color:'white'}}>
                        <h1 style={{textAlign:'left', fontSize:'20px', fontWeight:'bolder'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Elementum tempus egestas sed sed risus pretium quam. Mattis rhoncus urna neque viverra justo. Facilisis gravida neque convallis a cras semper. Cursus euismod quis viverra nibh cras pulvinar. Nulla facilisi nullam vehicula ipsum a arcu. Mauris augue neque gravida in fermentum et. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Back</h1>
                    </div>
                </MDBCard>
            </div>
        </ReactCardFlip>
        <br/> <br/>
        <ReactCardFlip isFlipped={Flipped3} flipDirection="vertical">
            <div className='front' style={{width:'auto', height:'auto'}} onMouseEnter={() => setFlipped3(!Flipped3)}>
                <MDBCard className='round' style={{...jumb, width:'90%', height:'250px', backgroundColor:'black', margin:'auto', padding:20, backgroundImage:`url(${img3})`, backgroundSize:'350px 350px', backgroundRepeat:'no-repeat', backgroundPositionX:'right', backgroundPositionY:'center'}}>
                <div style={{marginTop:'auto', marginBottom:'auto', marginLeft:'50px', color:'white'}}>
                    <h1 style={{textAlign:'left', fontFamily:'monospace', fontWeight:'bolder', fontSize:'50px'}}>CODE TOPIA 3</h1>
                    <hr color='white' style={{float:'left', width:'36%', height:'1px', borderRadius:'60px'}}/>
                    </div>
                </MDBCard>
            </div>
            <div className='back' style={{width:'auto', height:'auto '}} onMouseLeave={() => setFlipped3(!Flipped3)}>
                <MDBCard className='round' style={{...jumb, width:'90%', height:'250px', backgroundColor:'black', margin:'auto', padding:20}}>
                    <div style={{marginTop:'auto', marginBottom:'auto', marginLeft:'30px', marginRight:'30px', color:'white'}}>
                        <h1 style={{textAlign:'left', fontSize:'20px', fontWeight:'bolder'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Elementum tempus egestas sed sed risus pretium quam. Mattis rhoncus urna neque viverra justo. Facilisis gravida neque convallis a cras semper. Cursus euismod quis viverra nibh cras pulvinar. Nulla facilisi nullam vehicula ipsum a arcu. Mauris augue neque gravida in fermentum et. Aliquet bibendum enim facilisis gravida neque convallis a cras semper.
                        </h1>
                    </div>
                </MDBCard>
            </div>
        </ReactCardFlip>
    </div>
    </>)
    
    return (
        <div>
            <Container>
            <br />
            <br />
            <br />
            <h1> <strong> Events </strong> </h1>
            <br />
            <br />
            {event}
            <br />
            <br />
            <br />
            <br />
            <br />
            </Container>
        </div>
    );
}

const jumb : React.CSSProperties = {
    borderRadius: '10px',
}

export default Events;
