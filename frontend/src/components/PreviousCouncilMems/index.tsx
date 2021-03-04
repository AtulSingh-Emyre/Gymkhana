import React from 'react';

interface IProps {
    user : {
        gsAcadUG: string,
        gsAcadPG: string,
        gsCult: string;
        gsHos: string;
        gsTech: string;
        gsSports: string;

    }
}


const PreviousCouncilMems = (prop : IProps) => {
    
    return (
        <div style={container} >
General Secretary Academic Affairs (PG):	<br />  {prop.user.gsAcadUG}
General Secretary Academic Affairs (UG):	<br />   {prop.user.gsAcadPG}
General Secretary Cultural Affairs:	<br />           {prop.user.gsCult}
General Secretary Hostel Affairs:	<br />           {prop.user.gsHos}
General Secretary Technical Affairs:	<br />       {prop.user.gsTech}
General Secretary Sports Affairs:                     {prop.user.gsSports}
          
        </div>
    );
}

const container : React.CSSProperties = {
    
}


export default PreviousCouncilMems;
