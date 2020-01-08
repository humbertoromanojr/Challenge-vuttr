import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import DashboardForm from './pages/DashboardForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/dashboard/:id/edit" exact component={Dashboard} />
    </Switch>
  );
}
