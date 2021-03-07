import React, { useState } from 'react';

interface Ipropss {
    user : {
        year:string;
        gsAcad?: string,
        gsCult?: string;
        gsHos?: string;
        gsTech?: string;
        gsSports?: string;
        gsMess?: string
    }
}


const PreviousCouncilMems = (props : Ipropss) => {
    const [Hover, setHover] = useState(false);
    return (
        <div 
        style={container} 
        onMouseEnter={()=>setHover(true)} 
        onMouseLeave={()=>setHover(false)}
        >
            <h5> {props.user.year} </h5>
            
                {props.user.gsTech && Hover?<>General Secretary, Technical Affairs: {props.user.gsTech} <br/></>:<></>}
                    {props.user.gsAcad&& Hover?<> General Secretary Academic Affairs: {props.user.gsAcad}<br/></>:<></>}
                    {props.user.gsCult&& Hover?<>General Secretary Cultural Affairs: {props.user.gsCult}<br/></>:<></>}
                    {props.user.gsSports&& Hover? <>General Secretary Sports Affairs: {props.user.gsSports}<br/></>:<></>}
                    {props.user.gsHos&& Hover? <>General Secretary Hostel Affairs: {props.user.gsHos}<br/></>:<></>} 
                    {props.user.gsMess&& Hover? <>General Secretary Mess Affairs: {props.user.gsMess}<br/></>:<></>}
        </div>
    );
}
const container : React.CSSProperties = {
    // margin:'5%',
    // background:'#FFC400',
    alignItems:'center',
    alignSelf:'center',
}


export default PreviousCouncilMems;
