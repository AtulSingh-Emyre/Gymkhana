import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Cards from '../EventsCard';
import './styles.css';

function SportsMeet() {
    const [meet, setMeet] = useState(false);
    return (
        <div>
            <button onClick={() => setMeet(true)} style={{backgroundColor: 'transparent', border: 'none', color: 'white'}}>SPORTS MEET</button>
            <Modal 
                show={meet} 
                onHide={() => setMeet(false)} 
                backdrop="static" 
                keyboard={false}
                size="xl"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header>
                    <Modal.Title style={{marginTop: 'auto', marginBottom: 'auto', fontWeight: 'bolder'}}>Sports Meet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MDBContainer>
                        <MDBRow style={{marginTop: '2%'}}>
                            <MDBCol style={{marginTop: '2%'}}>
                                <Cards/>
                            </MDBCol>
                            <MDBCol style={{marginTop: '2%'}}>
                                <Cards/>
                            </MDBCol>
                        </MDBRow>
                        <br/>
                        <MDBRow style={{marginTop: '2%'}}>
                            <MDBCol style={{marginTop: '2%'}}>
                                <Cards/>
                            </MDBCol>
                            <MDBCol style={{marginTop: '2%'}}>
                                <Cards/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </Modal.Body>
                <Modal.Footer>
                    <button style={{backgroundColor: 'transparent', border: 'none', color: '#1f4baa'}} onClick={() => setMeet(false)}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SportsMeet
