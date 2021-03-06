import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

import Notices from '../pages/Notices';
import Calendar from '../pages/Calendar';
import Officebearers from '../pages/Officebearers';
import Technicalcouncil from '../pages/Technicalcouncil';
import Sportscouncil from '../pages/Sportscouncil';
import Culturalcouncil from '../pages/Culturalcouncil';
import Admin from '../pages/Admin';
import Admininput from '../pages/Admininput';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    
    <Route path="/notices"  component={Notices} />
    <Route path="/calendar"  component={Calendar} />
    <Route path="/office"  component={Officebearers} />
    <Route path="/technical"  component={Technicalcouncil} />
    <Route path="/sports"  component={Sportscouncil} />
    <Route path="/cultural"  component={Culturalcouncil} />
    <Route path="/admin"  component={Admin} />
    <Route path="/addevent"  component={Admininput} />
    
  </Switch>
);

export default Routes;
