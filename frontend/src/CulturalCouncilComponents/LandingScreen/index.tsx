import React from 'react'
import { Parallax } from 'react-parallax'

function LandingScreen() {
    return (    
        <div>
            <Parallax blur={{ min:-20, max:0 }} bgColor='#4285F4' strength={200}>
                <div>
                    <h1>
                        CC
                    </h1>
                </div>
            </Parallax>
        </div>
    )
}

export default LandingScreen;
