import React from 'react';

interface IProps {
    user : {
        gsTech: string,
        gsAcad: string,

    }
}


const PreviousCouncilMems = (prop : IProps) => {
    
    return (
        <div style={container} >
          asdfsdf:  {prop.user.gsAcad}
        </div>
    );
}

const container : React.CSSProperties = {
    
}


export default PreviousCouncilMems;
