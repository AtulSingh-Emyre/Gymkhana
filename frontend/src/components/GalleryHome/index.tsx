import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HorizontalScroll from 'react-scroll-horizontal'

const GalleryHome = () => {
    const child   = { width: `30em`, height: `100%`}
    
    return (
        <div style={{maxWidth:"100%", marginTop:50}}>
            <Row style={{maxWidth:"100%", height:400}}>
            <Col xl={1} xs={1} md={1} style={{textAlign:'center', fontSize:35, margin:'auto'}}>
                G<br/>
                A<br/>
                L<br/>L<br/>E<br/>R<br/>Y
            </Col>
            <Col xl={11} xs={11} md={11}>
            <HorizontalScroll
            reverseScroll={true}
            >
                <div style={{...child, backgroundColor:'blue'}} />
                <div style={{...child, backgroundColor:'yellow'}} />
                <div style={{...child, backgroundColor:'red'}} />
            </HorizontalScroll>
            </Col>
            </Row>
        </div>
    );
}

export default GalleryHome;
