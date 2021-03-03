import React from 'react';
import { MDBIcon, MDBContainer } from 'mdbreact';

const SocialButtonsPage = () => {
    return (
        <MDBContainer>
            <a href="#!" className="fb-ic mr-3">
                <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="#!" className="tw-ic mr-3">
                <MDBIcon fab icon="twitter" />
            </a>
            <a href="#!" className="li-ic mr-3">
                <MDBIcon fab icon="linkedin-in" />
            </a>
            <a href="#!" className="ins-ic mr-3">
                <MDBIcon fab icon="instagram" />
            </a>

            <a href="#!" className="yt-ic mr-3">
                <MDBIcon fab icon="youtube" />
            </a>
        </MDBContainer>
    );
}

export default SocialButtonsPage;