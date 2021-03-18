import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Details from '../../components/CouncilMemberDetail';
import PreviousCouncilMemsContainer from '../../components/PreviousCouncilMemsContainer';
import './index.css';
import PageStarter from '../../template/PageStarter';
const Officebearers: React.FC = () => {
  // making the page responsive:
  return (
    <div style={container}>
      <Header active={{office:true}}/>
      <PageStarter heading={'OFFICE BEARERS'}>
        <Details />
      </PageStarter>
      <div style={{ position:'relative', 
      backgroundColor:'white', width:'100%', padding:0, margin:0}}>
      <PreviousCouncilMemsContainer/>
      </div>
      <Footer />
      </div>
  );
};

const container: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}
export default Officebearers;
