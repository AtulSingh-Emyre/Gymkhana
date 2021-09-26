import React from 'react';
import { Row } from 'react-bootstrap';
import GalleryHome from '../../components/GalleryHome';
import PageStarter from '../../template/PageStarter';

const Gallery = () => {
    return (
        <div style={{maxWidth:'100%'}}>
            <Row style={{maxWidth:'100%'}}>
        <PageStarter heading={'GALLERY'} id={'gallery'}>
            <GalleryHome />
        </PageStarter>
        </Row>
        </div>
    );
}

export default Gallery;
