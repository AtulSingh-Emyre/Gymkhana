import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ParticlesBG from './ParticlesBG';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
  
  {/* <ParticlesBG /> */}
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
