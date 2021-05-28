import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
//import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
  {
    original: require('../../assets/Technical Council/Gallery/img1.jpg'),
    height:'100%',
    width:'100%',
    thumbnail: require('../../assets/Technical Council/Gallery/img1.jpg'),
  },
  {
    original: require('../../assets/Technical Council/Gallery/img2.jpg'),
    thumbnail: require('../../assets/Technical Council/Gallery/img2.jpg'),
  },
  {
    original: require('../../assets/Technical Council/Gallery/img3.jpg'),
    thumbnail: require('../../assets/Technical Council/Gallery/img3.jpg'),
  },
  {
    original: require('../../assets/Technical Council/Gallery/img4.jpg'),
    thumbnail: require('../../assets/Technical Council/Gallery/img4.jpg'),
  },
  {
    original: require('../../assets/Technical Council/Gallery/img5.jpg'),
    thumbnail: require('../../assets/Technical Council/Gallery/img5.jpg'),
  },
  {
    original: require('../../assets/Technical Council/Gallery/img6.jpg'),
    thumbnail: require('../../assets/Technical Council/Gallery/img6.jpg'),
  },{
    original: require('../../assets/Technical Council/Gallery/img7.jpg'),
    thumbnail: require('../../assets/Technical Council/Gallery/img7.jpg'),
  },
  {
    original: require('../../assets/Technical Council/Gallery/img8.jpg'),
    thumbnail: require('../../assets/Technical Council/Gallery/img8.jpg'),
  },
  {
    original: require('../../assets/Technical Council/Gallery/img9.jpg'),
    thumbnail: require('../../assets/Technical Council/Gallery/img9.jpg'),
  },
];

const TechGallery = () => {
    return (
        <div style={{maxWidth:'90%',height:'100vh', margin:'auto', marginBottom:80}}>
            <ImageGallery items={images} />;
        </div>
    );
}

export default TechGallery;
