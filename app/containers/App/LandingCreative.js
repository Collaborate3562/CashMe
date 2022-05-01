import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Creative from '../Templates/Creative';
import { SliderPage } from '../pageListAsync';

function Landing() {
  return (
    <Creative>
      <Switch>
        <Route exact path="/" component={SliderPage} />
      </Switch>
    </Creative>
  );
}

export default Landing;
