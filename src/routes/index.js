import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import AppRouter from './App';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/" isPrivate exact component={AppRouter} />
      <Route path="/profile" isPrivate exact component={Profile} />
    </Switch>
  );
}
