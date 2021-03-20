import { MDBCard, MDBIcon } from 'mdbreact';
import React from 'react';
import './styles.css'
interface IProp {
    data :{
        src:string,
        name: string,
        secy: string,
        desc: string,
        bg: string,
    }
}


const ClubsCard : React.FC<IProp> = (props) => {
    return (
        <div className="mb-4" style={{backgroundColor:props.data.bg}}>
        <div style={{ display:'flex', justifyContent: 'space-around'}}>
        <img
            className="img-fluid active-card-image"
            src={ props.data.src }
            alt=""
            style={{minHeight:200,maxHeight:250, alignContent:'center', margin:'auto'}}
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

export default ClubsCard;
