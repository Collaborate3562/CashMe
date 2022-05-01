import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Creative from '../Templates/Creative';
import { SliderDashboard } from '../pageListAsync';

export default function dashboard() {
  return (
    <Creative>
      <Switch>
        {/* <Route exact path="/dashboard" component={SliderDashboard} /> */}
      </Switch>
    </Creative>
  );
}
