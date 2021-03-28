import React from 'react';
import  "./index.css";

interface Iprop{}
const ComponentLoader: React.FC<Iprop> = (props) => {
    // $(window).on("load",function(){
    //     $(".loader-wrapper").fadeOut("slow");
    //   });
  
    return (
        <div>
            <div className="loader-wrapper">
                <span className="loader"><span className="loader-inner"></span></span>
            </div>
        </div>
    );
}

export default ComponentLoader;
