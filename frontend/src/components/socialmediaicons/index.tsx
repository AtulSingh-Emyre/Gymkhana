import React from 'react';
import { MDBIcon, MDBContainer } from 'mdbreact';

const SocialButtonsPage = () => {
    return (
        <MDBContainer>
            <a href="https://www.facebook.com/IITDhGymkhana" className="fb-ic mr-2" style={socialStyle} >
                <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="https://twitter.com/iitdhrwd?s=20" className="tw-ic mr-2" style={socialStyle}>
                <MDBIcon fab icon="twitter" />
            </a>
            <a href="https://in.linkedin.com/company/iit-dharwad" className="li-ic mr-2" style={socialStyle}>
                <MDBIcon fab icon="linkedin-in" />
            </a>
            <a href="https://www.instagram.com/iitdharwad/?hl=en" className="ins-ic mr-2" style={socialStyle}>
                <MDBIcon fab icon="instagram" />
            </a>
        </MDBContainer>
    );
}

const socialStyle : React.CSSProperties = {
    margin: 'auto',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
}

export default SocialButtonsPage;