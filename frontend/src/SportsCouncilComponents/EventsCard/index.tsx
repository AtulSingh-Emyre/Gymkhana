import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdbreact'
import { Interface } from 'node:readline'
import React, { useState } from 'react'

interface Iprops {
    data: {
        id: number,
        name: string,
        desc: string,
        link: string
    },
    img: string
}

function EventsCard(props: Iprops) {
    return (
        <div>
            <MDBCard>
                <img className="img-fluid" src={props.img}/>
                <MDBCardBody>
                    <MDBCardTitle>{props.data.name}</MDBCardTitle>
                    <MDBCardText>
                        {props.data.desc}
                    </MDBCardText>
                    {props.data.link=="#"?<div/>:<a href={props.data.link}><button className="shadow-box-example hoverable" style={{backgroundColor: '#1f4baa', border: 'none', color: 'white', borderRadius: '5px'}}>Poster</button></a>}
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default EventsCard
