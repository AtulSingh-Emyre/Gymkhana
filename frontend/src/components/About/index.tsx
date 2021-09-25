import React from 'react';
import { Button, Col, Container, Row} from 'react-bootstrap';
import PageStarter from '../../template/PageStarter';

const About = () => {
    return (
    <PageStarter heading={'About'} id={'about'}>
        <div  className="aboutus" >
            <p style={{ color: 'black' }}>
        Students’ Gymkhana, IIT Dharwad is the hub of the numerous extra-curricular and co-curricular activities in IIT Dharwad ranging from sports to socio-cultural events. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.
                        </p>
            <p style={{ color: 'black' }}>
          The goal of the body is to bring overall development in IITians through cultivating and nurturing their extra-curricular talents.
                        </p>
            <Row>
          <Col xl={3} sm={5} md={5} xs={12} style={{margin:'auto'}}>
            <Button variant="dark" style={{width:'100%', textAlign:'center', maxHeight:50, borderRadius:25, backgroundColor:'#FF6F00'}} >Constitution</Button>
            </Col>
            <Col xl={6} sm={2} md={2} xs={0}
            ></Col>
            <Col xl={3} md={5} sm={5} xs={12} style={{margin:'auto'}}>
            <Button variant="dark" style={{width:'100%', textAlign:'center', maxHeight:50, borderRadius:25, backgroundColor:'#FF6F00'}} >Rule Book</Button>
            </Col>
            </Row>
          </div>
      </PageStarter>
    );
}

export default About;
