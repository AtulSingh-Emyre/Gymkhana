import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Details from '../../components/CouncilMemberDetail';
import PreviousCouncilMemsContainer from '../../components/PreviousCouncilMemsContainer';
import './index.css';
import PageStarter from '../../template/PageStarter';
const Officebearers: React.FC = () => {
  return (
    <div style={container}>
      <PageStarter heading={'SECRETARIES'} id={'secretaries'}>
          <Details />
          <div style={{ position:'relative', 
          backgroundColor:'white', width:'100%', padding:0, margin:'auto'}}>
            <PreviousCouncilMemsContainer/>      
          </div>
      </PageStarter>
    </div>
  );
};

const container: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}
export default Officebearers;
