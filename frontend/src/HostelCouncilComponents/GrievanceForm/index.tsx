import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function GForm() {

    const [show, setShow] = useState(false);
    return (
        <div>
            <p onClick={() => setShow(true)}>GRIEVANCE FORM</p>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Grievance Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="abcd" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Hostel No.</Form.Label>
                            <Form.Control type="text" placeholder="Hostel XX" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Grievance</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
            </Button>
                    <Button variant="primary">Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default GForm;
