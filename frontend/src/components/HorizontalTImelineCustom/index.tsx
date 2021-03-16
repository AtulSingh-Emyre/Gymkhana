import React, { useState } from 'react';
import HorizontalTimeline from "react-horizontal-timeline";

const VALUES = ['2019','2018','2017','2016','2015', '2019','2018','2017','2016','2015'];



const HorizontalTimelineCustom = () => {
    const [value, setvalue] = useState(0);
    const [previous, setprevious] = useState(0);
    return (
        <div style = {{
            width:'100%',  
            // padding:'5%',
    alignItems:'center',
    margin: '0 auto',
    height: 100,
    alignSelf:'center',
    // backgroundColor: '#E65100'
       }}>
             <HorizontalTimeline
                index={value}
                indexClick={(index : any) => {
                    setprevious(value);
                    setvalue(index);
                }}
                values={ VALUES } 
                getLabel={(date: any) => date.slice(0, 4)}
                minEventPadding	= {120}
                maxEventPadding = {120}
                styles = {{
                    background:'white',
                    foreground: '#7b9d6f',
                    outline: '#dfdfdf'
                }}
            />
        </div>
    );
}

export default HorizontalTimelineCustom;
