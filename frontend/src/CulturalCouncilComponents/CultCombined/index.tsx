import React from 'react'
import CultHeader from '../../CulturalCouncilComponents/CultHeader';
import Gallery from '../../CulturalCouncilComponents/Gallery';
import CultClubs from '../../CulturalCouncilComponents/CultClubs';
import  Footer from '../../components/Footer'

function Compiled() {
    return (
        <div className='MainCard' style={{...card}}>
          <CultHeader />
          <Gallery />
            <div style={{width:'90%', height:'25%', marginLeft:'auto', marginBottom:'0', marginRight:'auto'}}>
                <div style={{width:'45%', marginRight:'auto', color:'#442C2E', float:'left'}}>
                    <h3><strong>CULTURAL COUNCIL</strong></h3>
                    <p color="black"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate 
                        mi sit amet mauris. Luctus accumsan tortor posuere ac. Leo a diam sollicitudin tempor id eu nisl.
                        Amet massa vitae tortor condimentum. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus \
                        pellentesque. Ac odio tempor orci dapibus ultrices in iaculis nunc. Sagittis id consectetur purus ut faucibus. 
                        Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Morbi blandit cursus risus at ultrices mi tempus. 
                        A lacus vestibulum sed arcu non. Orci sagittis eu volutpat odio facilisis mauris sit. Duis ultricies lacus sed turpis tincidunt 
                        id aliquet. Sit amet facilisis magna etiam tempor orci eu.
                    </p>
                </div>
                <div style={{width:'45%',  marginLeft:'auto', marginBottom:'0', color:'#442C2E', textAlign:'right', float:'right'}}>
                    <CultClubs />
                </div>
            </div>
            <div style={{width:'auto', position:'relative'}}>
                <Footer />
            </div>
        </div>
    )
}

const card:React.CSSProperties = {
    width:'90%',
    height:'1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px',
    borderRadius:'25px',
    backgroundColor:'#FFFFFF',
    boxShadow:'0 0 10px 5px rgba(1, 0, 0, 0.2)',
    overflow:'hidden'
}

export default Compiled
