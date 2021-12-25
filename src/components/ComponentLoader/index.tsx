import React from 'react';
import  "./index.css";

interface Iprop{}
const ComponentLoader: React.FC<Iprop> = (props) => {
    return (
        <div>
            <div className="loader-wrapper">
                <span className="loader"><span className="loader-inner"></span></span>
            </div>
        </div>
    );
}

export default ComponentLoader;
