import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";
// import Slider from "react-slick";
import './styles.css'
// interface IProp {
//     CouncilHeading : string;    
// }



const ClubsOverview = () => {
  
const clubData = [
  {
      name: 'Code Geass',
      src: require('../../assets/Technical Council/Clubs/codeGeass.png'),
      bg:'black',
      secy: 'Omkar DJ',
      desc: 'Code Geass is the official coding club at IIT Dharwad. It serves to bring together a community enriched in coding in terms both- algorithms as well as development.'
  },
  {
      name: 'Hardly Humans',
      src: require('../../assets/Technical Council/Clubs/AI.jpeg'),
      bg:'black',
      secy: 'Akhilesh',
      desc: 'Hardly Humans is the official AI and Data science club at IIT Dharwad. It serves to bring together a community enriched in coding in terms both- algorithms as well as development.'
  }
]


  const ClubCard = (props : { data :{
        src:string,
        name: string,
        secy: string,
        desc: string,
        bg: string,
    }}) => {
        return (
            <div className="mb-4" style={{backgroundColor:props.data.bg}}>
            <div>
            <img
                className="img-fluid active-card-image"
                src={ props.data.src }
                alt=""
              />
            </div>
        <MDBCard style={{margin:10, padding:10, marginTop:-40, zIndex:2, backgroundColor:'white'}} className='active-club-detail'>    
            <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
              <a href="#!">{props.data.name}</a>
            </h3>
            <div className="d-flex justify-content-between">
              <a href="#!" className="deep-orange-text">
                <h6 className="font-weight-bold">
                  <MDBIcon icon="graduation-cap" className="pr-2" />
                  Secretary : {props.data.secy}
                </h6>
              </a>
              <div className="d-flex justify-content-between">
              <a href="#!" className="deep-orange-text">
                <h6 className="font-weight-bold">
                  <MDBIcon icon="phone" className="pr-2" />
                </h6>
              </a>
              <a href="#!" className="deep-orange-text">
                <h6 className="font-weight-bold">
                  <MDBIcon icon="envelope" className="pr-2" />
                </h6>
              </a>
              </div>
            </div>
            <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
             {props.data.desc}
             {/* Code Geass is the official coding club at IIT Dharwad. It serves to bring together a community enriched in coding in terms both- algorithms as well as development. */}
            </p>
          </MDBCard>
          </div>
        )
    }
    
    
    return (
        <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
        >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Technical Clubs
          </h2>
          <MDBRow>
            {/* <MDBCol md="12" lg="6"> */}
              <ClubCard  data={clubData[0]} />
            {/* </MDBCol> */}

{/* start of other column............................ */}

            <MDBCol md="12" lg="6">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src={require('../../assets/Technical Council/Clubs/codeGeass.png')}
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      
                        <p className="font-weight-bold dark-grey-text">
                            Code Geass
                        </p>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      25/02/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Itaque earum rerum hic tenetur a sapiente delectus
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      24/03/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Soluta nobis est eligendi optio cumque nihil impedit
                          quo minus
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      23/02/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Duis aute irure dolor in reprehenderit in voluptate
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
}

export default ClubsOverview;
