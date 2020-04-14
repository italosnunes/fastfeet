import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Delivery from '../pages/Delivery';
import DeliveryNew from '../pages/Delivery/New';
import DeliveryMan from '../pages/Deliveryman';
import DeliveryManNew from '../pages/Deliveryman/New';
import Problem from '../pages/Problem';
import Recipient from '../pages/Recipient';
import RecipientNew from '../pages/Recipient/New';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/delivery" exact component={Delivery} isPrivate />
      <Route path="/delivery/new" exact component={DeliveryNew} isPrivate />
      <Route path="/deliveryman" exact component={DeliveryMan} isPrivate />
      <Route
        path="/deliveryman/new"
        exact
        component={DeliveryManNew}
        isPrivate
      />

      <Route path="/problem" exact component={Problem} isPrivate />
      <Route path="/recipient" exact component={Recipient} isPrivate />
      <Route path="/recipient/new" exact component={RecipientNew} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
