import React from 'react';

import PreviousCouncilMemsContainer from '../../components/PreviousCouncilMemsContainer';
import Details from '../../components/CouncilMemberDetail';
import PageStarter from '../../template/PageStarter';
import { styleSheet } from './styles';
import './index.css';

const Officebearers: React.FC = () => {

  return (
    <div style={styleSheet.container}>
      <PageStarter heading={'SECRETARIES'} id={'secretaries'}>
        <Details />
        <div style={styleSheet.info}>
          <PreviousCouncilMemsContainer/>
        </div>
      </PageStarter>
    </div>
  );
};

export default Officebearers;
