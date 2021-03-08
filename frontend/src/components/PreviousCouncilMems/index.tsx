import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { BiChevronsDown } from "react-icons/bi";
import './styles.css'

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
        style={{...container,  background: Hover? '#FFEE58' :'#FFC400' , }}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        >
            <h5 style={{textAlign:'center'}}> {props.user.year} <BiChevronsDown color={'black'} size={30} />  </h5>
            <div className='dropDown'>  
            {props.user.gsTech && Hover?<>General Secretary, Technical Affairs: {props.user.gsTech} <br/></>:<></>}
                  {props.user.gsAcad&& Hover?<> General Secretary Academic Affairs: {props.user.gsAcad}<br/></>:<></>}
                  {props.user.gsCult&& Hover?<>General Secretary Cultural Affairs: {props.user.gsCult}<br/></>:<></>}
                  {props.user.gsSports&& Hover? <>General Secretary Sports Affairs: {props.user.gsSports}<br/></>:<></>}
                  {props.user.gsHos&& Hover? <>General Secretary Hostel Affairs: {props.user.gsHos}<br/></>:<></>}
                  {props.user.gsMess&& Hover? <>General Secretary Mess Affairs: {props.user.gsMess}<br/></>:<></>}
                  </div>





        </div>
    );
}
const container : React.CSSProperties = {
    // margin:'5%',
    alignItems:'center',
    alignSelf:'center',
    width:'100%',
    height:'100%',
    padding:5,
    margin:'auto',
}


export default PreviousCouncilMems;
