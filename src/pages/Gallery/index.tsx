import React from 'react';
import { Row } from 'react-bootstrap';

import GalleryHome from '../../components/GalleryHome';
import PageStarter from '../../template/PageStarter';
import { styleSheet } from './styles';

const Gallery = () => {
    return (
        <div style={styleSheet.fullWidth}>
            <Row style={styleSheet.fullWidth}>
                <PageStarter heading={'GALLERY'} id={'gallery'}>
                    <GalleryHome />
                </PageStarter>
            </Row>
        </div>
    );
}

export default Gallery;
