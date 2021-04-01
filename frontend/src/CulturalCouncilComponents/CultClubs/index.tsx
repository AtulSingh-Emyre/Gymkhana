import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

interface ClubInfo {
    name: string;
    secy: string;
    memb:string;
    logo:string;
    desc:string;
}

interface Iprops {
    ClubData : ClubInfo;
}

const ClubData = [
    {
        "name": "Dance Club",
        "secy":  "Purnima Priyadarshini",
        "memb": "google",
        "logo": "logo.png",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        "name": "Drama Club",
        "secy":  "Rohit Gour",
        "memb": "google",
        "logo": "logo.png",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        "name": "Fine Arts Club",
        "secy":  "Fidha",
        "memb": "google",
        "logo": "logo.png",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        "name": "Literary Club",
        "secy":  "Sameer Anis Dohadwalla",
        "memb": "google",
        "logo": "logo.png",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        "name": "Music Club",
        "secy":  "Rushikesh Dixit",
        "memb": "google",
        "logo": "logo.png",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },    
    {
        "name": "Photography and Films Club",
        "secy":  "Prajwal Paloju",
        "memb": "google",
        "logo": "logo.png",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, 
    {
        "name": "Quiz Club",
        "secy":  "Abhinav Soni",
        "memb": "google",
        "logo": "logo.png",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
        <u style={{color:'#8A003E'}}><h4 style={{fontWeight:'bold', color:'#8A003E'}}>CLUBS</h4></u>
        {/* <br/> */}
        <ul style={{listStyle:'none'}}>
            <li>
                <div onClick={handleShow0}> 
                    <h6 style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[0].name}</h6>
                </div>
            </li>
            <li>
                <div onClick={handleShow1}>
                    <h6 style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[1].name}</h6>
                </div>
            </li>
            <li>
                <div onClick={handleShow2}>
                    <h6 style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[2].name}</h6>
                </div>
            </li>
            <li>
                <div onClick={handleShow3}>
                    <h6 style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[3].name}</h6>
                </div>
            </li>
            <li>
                <div onClick={handleShow4}>
                    <h6 style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[4].name}</h6>
                </div>
            </li>
            <li>
                <div onClick={handleShow5}>
                    <h6 style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[5].name}</h6>
                </div>
            </li>
            <li>
                <div onClick={handleShow6}>
                    <h6 style={{fontFamily:'sans-serif', cursor:'pointer', color:'#DF0054'}}>{ClubData[6].name}</h6>
                </div>
            </li>
        </ul>

        <Modal show={show0} onHide={handleClose0}>
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[0].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[0].secy}</h5>
                <br/>
                <h5><strong>Club Secretary:</strong></h5><p>{ClubData[0].desc}</p>
            </Modal.Body>
        </Modal>

        <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[1].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[1].secy}</h5>
                <br/>
                <h5><strong>Club Secretary:</strong></h5><p>{ClubData[1].desc}</p>
            </Modal.Body>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[2].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[2].secy}</h5>
                <br/>
                <h5><strong>Club Secretary:</strong></h5><p>{ClubData[2].desc}</p>
            </Modal.Body>
        </Modal>
        <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[3].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[3].secy}</h5>
                <br/>
                <h5><strong>Club Secretary:</strong></h5><p>{ClubData[3].desc}</p>
            </Modal.Body>
        </Modal>
        <Modal show={show4} onHide={handleClose4}>
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[4].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[4].secy}</h5>
                <br/>
                <h5><strong>Club Secretary:</strong></h5><p>{ClubData[4].desc}</p>
            </Modal.Body>
        </Modal>
        <Modal show={show5} onHide={handleClose5}>
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[5].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[5].secy}</h5>
                <br/>
                <h5><strong>Club Secretary:</strong></h5><p>{ClubData[5].desc}</p>
            </Modal.Body>
        </Modal>
        <Modal show={show6} onHide={handleClose6}>
            <Modal.Header closeButton>
                <Modal.Title>{ClubData[6].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><strong>Club Secretary:</strong>       {ClubData[6].secy}</h5>
                <br/>
                <h5><strong>Club Secretary:</strong></h5><p>{ClubData[6].desc}</p>
            </Modal.Body>
        </Modal>
    </>);
}
  
export default CultClubs;