import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import Notices from '../pages/Notices';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/contact"  component={Contact} />
    <Route path="/notices"  component={Notices} />
    
  </Switch>
);

export default Routes;
