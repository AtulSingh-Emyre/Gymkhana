import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CouncilCard from '../../components/CouncilCard';
import PageStarter from '../../template/PageStarter';
import councilInfo from '../../assets/councils.json';
import { styleSheet } from './styles';

const Councils = () => {
    return (
        <Row style={styleSheet.container}>
            <PageStarter heading={'COUNCILS'} id={'councils'} >
                <Container>
                    <Row style={styleSheet.container}>
                        {councilInfo.map(data => (
                            <Col md={6} xs={12} xl={4} lg={4} style={styleSheet.spacing}>
                                <CouncilCard data={data}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </PageStarter>
        </Row>
    );
}

export default Councils;
