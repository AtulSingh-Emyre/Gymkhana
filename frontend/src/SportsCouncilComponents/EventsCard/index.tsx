import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact'
import React, { useState } from 'react'

function EventsCard() {
    return (
        <div>
            <MDBCard>
                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"/>
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <a href="#"><button className="shadow-box-example hoverable" style={{backgroundColor: '#1f4baa', border: 'none', color: 'white', borderRadius: '5px'}}>Poster</button></a>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default EventsCard
