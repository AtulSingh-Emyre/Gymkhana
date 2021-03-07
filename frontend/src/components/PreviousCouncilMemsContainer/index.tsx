import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PreviousCouncilMems from '../PreviousCouncilMems';

const data = [
    {
        year: '2020', 
        gsCult: "Sonu Sourav", 
        gsHos: "Sonu Sourav", 
        gsTech: "Sonu Sourav", 
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav", 
    },
     {
        year: '2019',  
        gsCult: "Sonu Sourav", 
        gsHos: "Sonu Sourav", 
        gsTech: "Sonu Sourav", 
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav", 
    },
     {
        year:'2018',  
        gsCult: "Sonu Sourav", 
        gsHos: "Sonu Sourav", 
        gsTech: "Sonu Sourav", 
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav", 
    },
    { 
        year:'2017',
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
            <Row style={container}>
                {
                    data.map(council => {
                        return (
                            <>
                            <Col xs={10} xl={6} md={8}>
                            <PreviousCouncilMems user={council} />
                            </Col>
                            </>
                        )
                    })
                }
            </Row>
        </div>
    );
}

export default PreviousCouncilMemsContainer;


const container: React.CSSProperties = {
    width:'100%',
    alignItems:'center',
    alignSelf:'center'
}