import React from 'react'
import CultHeader from '../../CulturalCouncilComponents/CultHeader';
import Gallery from '../../CulturalCouncilComponents/Gallery';
import CultClubs from '../../CulturalCouncilComponents/CultClubs';
// import CultFooter from '../CultFooter';

function Compiled() {
    return (
        <div className='MainCard' style={{...card}}>
          <CultHeader />
          <Gallery />
            <div style={{width:'90%', height:'25%', marginLeft:'auto', marginTop:'-15px', marginRight:'auto'}}>
                <div style={{width:'75%', marginRight:'auto', float:'left', position:'relative'}}>
                    <h3 style={{color:'#8A003E'}}><strong>CULTURAL COUNCIL</strong></h3>
                    <p style={{color:'#DF0054'}}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Orci sagittis eu volutpat odio 
                        facilisis mauris sit amet. Ut consequat semper viverra nam libero justo laoreet sit. Velit ut tortor pretium viverra 
                        suspendisse. Ut tristique et egestas quis ipsum suspendisse ultrices. Amet mattis vulputate enim nulla aliquet porttitor. 
                        In ornare quam viverra orci sagittis eu volutpat. Mattis nunc sed blandit libero volutpat sed. Tempus iaculis urna id volutpat. 
                        Interdum velit laoreet id donec ultrices tincidunt. Lorem mollis aliquam ut porttitor. Tellus orci ac auctor augue mauris. 
                        Porta lorem mollis aliquam ut. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Scelerisque mauris 
                        pellentesque pulvinar pellentesque habitant morbi. Nam libero justo laoreet sit amet. Egestas purus viverra accumsan in nisl
                        nisi scelerisque.
                    </p>
                </div>
                <div style={{width:'20%',  marginLeft:'auto', marginBottom:'0', float:'right', textAlign:'right'}}>
                    <CultClubs />
                </div>
            </div>
            <div style={{width:'auto', position:'relative', marginTop:'-35px'}}>
                {/* <CultFooter /> */}
            </div>
        </div>
    )
}

const card:React.CSSProperties = {
    width:'90%',
    height:'1100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px',
    borderRadius:'25px',
    backgroundColor:'#FFFFFF',
    boxShadow:'0 0 10px 5px rgba(1, 0, 0, 0.2)',
    overflow:'hidden'
}

export default Compiled
