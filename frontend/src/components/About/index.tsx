import React from 'react';
import { Button, Col, Row} from 'react-bootstrap';

import PageStarter from '../../template/PageStarter';
import { styleSheet } from './styles';

const About = () => {
    return (
      <div style={styleSheet.fullWidth}>
        <PageStarter heading={'About'} id={'about'}>
          <div  className="aboutus" style={styleSheet.margin}>
            <p style={styleSheet.content}>
              Students’ Gymkhana, IIT Dharwad is the hub of the numerous extra-curricular and co-curricular activities in IIT Dharwad ranging from sports to socio-cultural events. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.
            </p>
            <p style={styleSheet.content}>
              The goal of the body is to bring overall development in IITians through cultivating and nurturing their extra-curricular talents.
            </p>
            <br/>
            <Row style={styleSheet.row}>
              <Col xl={3} sm={5} md={5} xs={12}>
                <Button variant="dark" style={styleSheet.button} >Constitution</Button>
              </Col>
              <Col xl={3} md={5} sm={5} xs={12}>
                <Button variant="dark" style={styleSheet.button} >Rule Book</Button>
              </Col>
            </Row>
          </div>
        </PageStarter>
      </div>
    );
}

export default About;
