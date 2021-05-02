import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react'
import MemberCard from '../../components/MemberCard';

function HBody() {

    const data= [
        {
            name: 'Durga Naga Sai Rahul M',
            phone: 7892128329,
            email: 'gsha@iitdh.ac.in',
            councilPost: 'Hostel Affairs',
            website: 'https://www.google.com/',
            linkedIn: 'https://www.linkedin.com/',
            insta: 'https://www.instagram.com/',
            image: require("../../assets/CouncilMems/gs-Hostel.jpg")
        },
        {
            name: 'Durga Naga Sai Rahul M',
            phone: 7892128329,
            email: 'gsha@iitdh.ac.in',
            councilPost: 'Hostel Affairs',
            website: 'https://www.google.com/',
            linkedIn: 'https://www.linkedin.com/',
            insta: 'https://www.instagram.com/',
            image: require("../../assets/CouncilMems/gs-Hostel.jpg")
        },
        {
            name: 'Durga Naga Sai Rahul M',
            phone: 7892128329,
            email: 'gsha@iitdh.ac.in',
            councilPost: 'Hostel Affairs',
            website: 'https://www.google.com/',
            linkedIn: 'https://www.linkedin.com/',
            insta: 'https://www.instagram.com/',
            image: require("../../assets/CouncilMems/gs-Hostel.jpg")
        },
        {
            name: 'Durga Naga Sai Rahul M',
            phone: 7892128329,
            email: 'gsha@iitdh.ac.in',
            councilPost: 'Hostel Affairs',
            website: 'https://www.google.com/',
            linkedIn: 'https://www.linkedin.com/',
            insta: 'https://www.instagram.com/',
            image: require("../../assets/CouncilMems/gs-Hostel.jpg")
        },
        {
            name: 'Durga Naga Sai Rahul M',
            phone: 7892128329,
            email: 'gsha@iitdh.ac.in',
            councilPost: 'Hostel Affairs',
            website: 'https://www.google.com/',
            linkedIn: 'https://www.linkedin.com/',
            insta: 'https://www.instagram.com/',
            image: require("../../assets/CouncilMems/gs-Hostel.jpg")
        },
        {
            name: 'Durga Naga Sai Rahul M',
            phone: 7892128329,
            email: 'gsha@iitdh.ac.in',
            councilPost: 'Hostel Affairs',
            website: 'https://www.google.com/',
            linkedIn: 'https://www.linkedin.com/',
            insta: 'https://www.instagram.com/',
            image: require("../../assets/CouncilMems/gs-Hostel.jpg")
        }
    ]

    return (
        <div>
            <MDBContainer style={{marginTop: '3%'}}>
                <MDBRow>
                    <MDBCol>
                        <h3 style={{color: '#B175FF'}}><strong>About the Hostel Council</strong></h3>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit potenti, sapien aliquam turpis inceptos est posuere nullam nulla habitasse, pharetra mus volutpat ullamcorper sagittis eros ornare cursus. Sodales quisque ultricies nam rhoncus venenatis per nascetur morbi lacus ornare, nunc varius elementum vitae urna cum ut ante aliquam, parturient natoque sit metus senectus interdum volutpat duis commodo. 
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer style={{width: 'auto', height: 'auto', marginTop: '1%'}}>
                <MDBRow>
                    <MDBCol>
                        <h3 style={{color: '#B175FF'}}><strong>Council Members</strong></h3>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBRow>
                            {
                                data.map((council) => (
                                    <MDBCol
                                      xs={"12"} md={"6"} xl={"4"}
                                      style={col_style}
                                    >
                                      <MemberCard person={council} />
                                    </MDBCol>
                                ))
                            }
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

const col_style: React.CSSProperties = {
    height: 'auto',
    margin: 'auto',
    padding: '3.4%',
    maxWidth: '450px',
}

export default HBody;
