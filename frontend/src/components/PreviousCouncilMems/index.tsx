import React from 'react';

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
    
    return (
        <div style={container} >
            <h5>{props.user.year}</h5>
            {props.user.gsTech?<>General Secretary, Technical Affairs: {props.user.gsTech} <br/></>:<></>}
            {props.user.gsAcad?<> General Secretary Academic Affairs: {props.user.gsAcad}<br/></>:<></>}
            {props.user.gsCult?<>General Secretary Cultural Affairs: {props.user.gsCult}<br/></>:<></>}
            {props.user.gsSports? <>General Secretary Sports Affairs: {props.user.gsSports}<br/></>:<></>}
            {props.user.gsHos? <>General Secretary Hostel Affairs: {props.user.gsHos}<br/></>:<></>} 
            {props.user.gsMess? <>General Secretary Mess Affairs: {props.user.gsMess}<br/></>:<></>}
        </div>
    );
}
const container : React.CSSProperties = {
    margin:'5%',
    alignItems:'center',
    alignSelf:'center',
}


export default PreviousCouncilMems;
