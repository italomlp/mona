import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Trash from './pages/Trash';

export default function Routes() {
  return (
    <MemoryRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/trash" component={Trash} />
      </Switch>
    </MemoryRouter>
  );
}
