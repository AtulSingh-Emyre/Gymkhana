// import React from 'react';
import React from 'react';
import Gallery from 'react-grid-gallery';

import {gallery} from '../../assets/galleryImages';
import { styleSheet } from './styles';

const GalleryHome = () => { 
        return (
			<div style={styleSheet.root}>
				<Gallery images={gallery} enableImageSelection ={false} />
			</div>
        );
}

export default GalleryHome;
