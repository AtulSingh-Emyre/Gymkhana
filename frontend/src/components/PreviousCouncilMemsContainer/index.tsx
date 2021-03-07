import React from 'react';
import PreviousCouncilMems from '../PreviousCouncilMems';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
  
const data = [
    {
        year: '2020 - 2021', 
        gsCult: "Sonu Sourav", 
        gsHos: "Sonu Sourav", 
        gsTech: "Sonu Sourav", 
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav", 
    },
     {
        year: '2019 - 2020',  
        gsCult: "Sonu Sourav", 
        gsHos: "Sonu Sourav", 
        gsTech: "Sonu Sourav", 
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav", 
    },
     {
        year:'2018 - 2019',  
        gsCult: "Sonu Sourav", 
        gsHos: "Sonu Sourav", 
        gsTech: "Sonu Sourav", 
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav", 
    },
    { 
        year:'2017 - 2018',
        gsCult: "Sonu Sourav", 
        gsHos: "Sonu Sourav", 
        gsTech: "Sonu Sourav", 
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav", 
    },
]



const PreviousCouncilMemsContainer = () => {
    return (
        <div style={container}>
            <VerticalTimeline>
            {
                data.map(council => {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: '#FFD54F', color: 'black', padding:0 }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            // date={council.year}
                            iconStyle={{ 
                                background: 'red', color: '#fff', 
                                backgroundImage: `url('https://previews.123rf.com/images/vectorv/vectorv1910/vectorv191023841/132930824-white-clock-icon-isolated-on-white-background-square-color-button-vector-illustration.jpg')`, 
                                backgroundPosition: 'center',
                                backgroundSize: 100
                            }}
                            >        
                        <PreviousCouncilMems user={council} /> 
                </VerticalTimelineElement>
                )
                })
            }            
            </VerticalTimeline>
        </div>
    );
}

export default PreviousCouncilMemsContainer;


const container: React.CSSProperties = {
    width:'100%',
    alignItems:'center',
    alignSelf:'center',

}