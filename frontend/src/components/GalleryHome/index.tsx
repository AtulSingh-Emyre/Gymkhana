// import React from 'react';
import React from 'react';
import Gallery from 'react-grid-gallery';

import IMAGES from '../../assets/galleryImages.json';
import { styleSheet } from './styles';

const GalleryHome = () => { 
        return (
			<div style={styleSheet.root}>
				<Gallery images={IMAGES} enableImageSelection ={false} />
			</div>
        );
}

export default GalleryHome;
