import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { useState } from 'react'
import { Dropdown, Modal } from 'react-bootstrap';
import Cards from '../EventsCard';
import info from '../../assets/sportsevents.json';
import './styles.css';

function SportsMeet() {
    const [meet, setMeet] = useState(false);
    const [active, setActive] = useState(true);
    let state = active?"CUrrent Year":"Last Year";
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
                    <Modal.Title style={{marginTop: 'auto', marginBottom: 'auto', fontWeight: 'bolder'}}>Sports Meet Participants</Modal.Title>
                    <Dropdown>
                        <Dropdown.Toggle style={{borderRadius: '8px'}}>{state}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#" onClick={() => setActive(true)}>Current Year</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={() => setActive(false)}>Last Year</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Modal.Header>
                <Modal.Body>
                    <MDBContainer>
                        <MDBRow style={{marginTop: '2%'}}>
                            <MDBCol style={{marginTop: '2%'}}>
                                <Cards data={active?info.sportsMeet.current[0]:info.sportsMeet.previous[0]} img={require("../../assets/CouncilMems/gs-Sports.jpg")}/>
                            </MDBCol>
                            <MDBCol style={{marginTop: '2%'}}>
                                <Cards data={active?info.sportsMeet.current[1]:info.sportsMeet.previous[1]} img={require("../../assets/CouncilMems/gs-Sports.jpg")}/>
                            </MDBCol>
                        </MDBRow>
                        <br/>
                        <MDBRow style={{marginTop: '2%'}}>
                            <MDBCol style={{marginTop: '2%'}}>
                                <Cards data={active?info.sportsMeet.current[2]:info.sportsMeet.previous[2]} img={require("../../assets/CouncilMems/gs-Sports.jpg")}/>
                            </MDBCol>
                            <MDBCol style={{marginTop: '2%'}}>
                                <Cards data={active?info.sportsMeet.current[3]:info.sportsMeet.previous[3]} img={require("../../assets/CouncilMems/gs-Sports.jpg")}/>
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
