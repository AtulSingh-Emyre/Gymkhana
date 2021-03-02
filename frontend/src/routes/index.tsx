import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import Notices from '../pages/Notices';
import Calendar from '../pages/Calendar';
import Officebearers from '../pages/Officebearers';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/contact"  component={Contact} />
    <Route path="/notices"  component={Notices} />
    <Route path="/calendar"  component={Calendar} />
    <Route path="/office"  component={Officebearers} />
    
  </Switch>
);

export default Routes;
