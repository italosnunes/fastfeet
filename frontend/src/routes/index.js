import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Delivery from '../pages/Delivery';
import DeliveryMan from '../pages/Deliveryman';
import Problem from '../pages/Problem';
import Recipient from '../pages/Recipient';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/delivery" component={Delivery} isPrivate />
        <Route path="/deliveryman" component={DeliveryMan} isPrivate />
        <Route path="/problem" component={Problem} isPrivate />
        <Route path="/recipient" component={Recipient} isPrivate />
        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
