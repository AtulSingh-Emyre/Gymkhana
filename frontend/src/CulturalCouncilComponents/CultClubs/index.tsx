import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './styles.css';

const ClubData = [
    {
        "name": "Dance Club",
        "secy":  "Purnima Priyadarshini",
        "memb": "google",
        "logo": "logo.png",
        "desc": "We organise a lot of fun events,workshops on Dance!"
    },
    {
        "name": "Drama Club",
        "secy":  "Rohit Gour",
        "memb": "google",
        "logo": "logo.png",
        "desc": "We organise a lot of fun events,workshops on Drama!"
    },
    {
        "name": "Fine Arts Club",
        "secy":  "Fidha",
        "memb": "google",
        "logo": "logo.png",
        "desc": "We organise a lot of fun events,workshops on Fine Arts!"
    },
    {
        "name": "Literary Club",
        "secy":  "Sameer Anis Dohadwalla",
        "memb": "google",
        "logo": "logo.png",
        "desc": "We organise a lot of fun events,workshops related to Literacy!"
    },
    {
        "name": "Music Club",
        "secy":  "Rushikesh Dixit",
        "memb": "google",
        "logo": "logo.png",
        "desc": "We organise a lot of fun events,workshops related to Music!"
    },    
    {
        "name": "Photography and Films Club",
        "secy":  "Prajwal Paloju",
        "memb": "google",
        "logo": "logo.png",
        "desc": "We organise a lot of fun events,workshops on Filming and Photography!"
    }, 
    {
        "name": "Quiz Club",
        "secy":  "Abhinav Soni",
        "memb": "google",
        "logo": "logo.png",
        "desc": "We organise a lot of fun events,trivias!"
    }         
]

function CultClubs() {

    const [show0, setShow0] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)

    const handleClose0 = () => setShow0(false)
    const handleClose1 = () => setShow1(false)
    const handleClose2 = () => setShow2(false)
    const handleClose3 = () => setShow3(false)
    const handleClose4 = () => setShow4(false)
    const handleClose5 = () => setShow5(false)
    const handleClose6 = () => setShow6(false)

    const handleShow0 = () => setShow0(true)
    const handleShow1 = () => setShow1(true)
    const handleShow2 = () => setShow2(true)
    const handleShow3 = () => setShow3(true)
    const handleShow4 = () => setShow4(true)
    const handleShow5 = () => setShow5(true)
    const handleShow6 = () => setShow6(true)
  
    return (<>
        <h4 className="title" style={{fontWeight:'bold', color:'#8A003E'}}>CLUBS</h4>
        {/* <br/> */}
        <Container style={{listStyle:'none', marginLeft:'0', paddingRight:'0', paddingLeft: '0'}}>
            <div>
                <div onClick={handleShow0}> 
                    <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[0].name}</h6>
                </div>
            </div>
            <div>
                <div onClick={handleShow1}>
                    <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[1].name}</h6>
                </div>
            </div>
            <div>
                <div onClick={handleShow2}>
                    <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[2].name}</h6>
                </div>
            </div>
            <div>
                <div onClick={handleShow3}>
                    <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[3].name}</h6>
                </div>
            </div>
            <div>
                <div onClick={handleShow4}>
                    <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[4].name}</h6>
                </div>
            </div>
            <div>
                <div onClick={handleShow5}>
                    <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[5].name}</h6>
                </div>
            </div>
            <div>
                <div onClick={handleShow6}>
                    <h6 className="name" style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[6].name}</h6>
                </div>
            </div>
        </Container>

        <Modal show={show0} onHide={handleClose0} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[0].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[0].secy}</h5>
                <br/>
                <h5><strong>About the Club:</strong></h5><p>{ClubData[0].desc}</p>
            </Modal.Body>
        </Modal>

        <Modal show={show1} onHide={handleClose1} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[1].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[1].secy}</h5>
                <br/>
                <h5><strong>About the Club:</strong></h5><p>{ClubData[1].desc}</p>
            </Modal.Body>
        </Modal>
        <Modal show={show2} onHide={handleClose2} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[2].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[2].secy}</h5>
                <br/>
                <h5><strong>About the Club:</strong></h5><p>{ClubData[2].desc}</p>
            </Modal.Body>
        </Modal>
        <Modal show={show3} onHide={handleClose3} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[3].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[3].secy}</h5>
                <br/>
                <h5><strong>About the Club:</strong></h5><p>{ClubData[3].desc}</p>
            </Modal.Body>
        </Modal>
        <Modal show={show4} onHide={handleClose4} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[4].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[4].secy}</h5>
                <br/>
                <h5><strong>About the Club:</strong></h5><p>{ClubData[4].desc}</p>
            </Modal.Body>
        </Modal>
        <Modal show={show5} onHide={handleClose5} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[5].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[5].secy}</h5>
                <br/>
                <h5><strong>About the Club:</strong></h5><p>{ClubData[5].desc}</p>
            </Modal.Body>
        </Modal>
        <Modal show={show6} onHide={handleClose6} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[6].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[6].secy}</h5>
                <br/>
                <h5><strong>About the Club:</strong></h5><p>{ClubData[6].desc}</p>
            </Modal.Body>
        </Modal>
    </>);
}
  
export default CultClubs;