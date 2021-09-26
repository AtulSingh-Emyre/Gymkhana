import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CouncilCard from '../../components/CouncilCard';
import PageStarter from '../../template/PageStarter';

const councilInfo = [ 
{
    title: 'Technical Council',
    desc: 'The technical council is involved in conduction of technical activities in the institute and aims to grow the technical culture.',
},
{
    title: 'Cultural Council',
    desc: 'The technical council is involved in conduction of technical activities in the institute and aims to grow the technical culture.',
},{
    title: 'Sports Council',
    desc: 'The technical council is involved in conduction of technical activities in the institute and aims to grow the technical culture.',
},{
    title: 'Academic Council',
    desc: 'The technical council is involved in conduction of technical activities in the institute and aims to grow the technical culture.',
},{
    title: 'Hostel Council',
    desc: 'The technical council is involved in conduction of technical activities in the institute and aims to grow the technical culture.',
},{
    title: 'Mess Commette',
    desc: 'The technical council is involved in conduction of technical activities in the institute and aims to grow the technical culture.',
}

]

const Councils = () => {
    return (
        <Row style={{maxWidth:'100%', margin:'auto'}}>
            <PageStarter heading={'COUNCILS'} id={'councils'} >
                <Container>
                <Row style={{maxWidth:'100%', margin:'auto'}}>
        
                {
                    councilInfo.map((data) => 
                    <>
                        <Col md={6} xs={12} xl={4} lg={4}
                        style={{margin:'auto', padding:10}}
                        >    
                            <CouncilCard data={data}/>
                        </Col> 
                    </>)
                }    
                </Row>
                </Container>
        
            </PageStarter>
        </Row>
    );
}

export default Councils;
