import React from 'react';
// import clubdata from '../../assets/clubdetails.json';
import Container from 'react-bootstrap/Container';

interface IProps {
    club: Array<{
        id: string;
        clubname: string;
        secyname: string;
        memblink: string;
        logo: string;
        clubdesc: string;
    }>
}

const Clubsinfo = (prop: IProps) => {
    return (
        <Container>
            <div style={{ maxWidth: '100%' }}>
                <h1 style={{textDecoration:'underline'}}>Clubs Overview</h1>
                <br />
                {prop.club.map((item, i) => {
                    const path = item.logo;
                    // + item.logo;
                    return (
                        <div key={i} style={{margin:'20px',padding:'5px'}}>
                            <h2>{item.clubname} Club</h2>
                            <img src={require('./../../assets/' + path)} alt={item.clubname} style={{ float: 'left', maxWidth: '60px' }} />
                            <p>{item.clubdesc}</p>
                        </div>
                    )
                }
                )}
            </div>
        </Container>
    )
};

export default Clubsinfo;