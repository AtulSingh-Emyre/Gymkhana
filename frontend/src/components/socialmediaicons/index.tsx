import React from 'react';
import { MDBIcon, MDBContainer } from 'mdbreact';

const SocialButtonsPage = () => {
    return (
        <MDBContainer>
            <a href="https://www.facebook.com/IITDhGymkhana" className="fb-ic mr-3">
                <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="https://twitter.com/iitdhrwd?s=20" className="tw-ic mr-3">
                <MDBIcon fab icon="twitter" />
            </a>
            <a href="https://in.linkedin.com/company/iit-dharwad" className="li-ic mr-3">
                <MDBIcon fab icon="linkedin-in" />
            </a>
            <a href="https://www.instagram.com/iitdharwad/?hl=en" className="ins-ic mr-3">
                <MDBIcon fab icon="instagram" />
            </a>


        </MDBContainer>
    );
}

export default SocialButtonsPage;