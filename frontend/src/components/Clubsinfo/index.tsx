import React from 'react';
import clubdata from '../../assets/clubdetails.json';
import Jumbotron from 'react-bootstrap/Jumbotron';

interface IProps {
    club: {
        clubname: string;
    }
}

const Clubsinfo = (prop : IProps) => {
return(
<Jumbotron>
<div>
<h1>Clubs Overview</h1>
            <br/>
    {clubdata.sports.map((item, i) => {
        const path = item.logo;
        // + item.logo;
        return (
        <div key={i}>
            <h2>{item.clubname} Club</h2>
            <img src={require('./../../assets/'+path)} alt={item.clubname} style={{float:'left',}}/>
            <p>{item.clubdesc}</p>
        </div>
    )}
    )}

</div>
</Jumbotron>
)
};

export default Clubsinfo;