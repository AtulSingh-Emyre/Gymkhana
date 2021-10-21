import React from 'react';
import { Container } from 'react-bootstrap';

import { styleSheet } from './styles';

interface IProp {
    heading: string;
    children: any;
    color?: string;
    id?:string;
}

const PageStarter = (props: IProp) => {
    return (
      <div id={props.id} style={{ backgroundColor:props.color?props.color:'white', ...styleSheet.container }}>
        <div style={styleSheet.header} className={'child1'}>
          <Container >
            <strong>
              <b>
                <h3 style={{ ...styleSheet.heading, textAlign: 'center' }}>
                  {props.heading}
                </h3>
              </b>
            </strong>
          </Container>
        </div>
        <br/>
        <div style={styleSheet.children} className={'child2'}>
          {props.children}
        </div>
      </div>
    );
}

export default PageStarter;
