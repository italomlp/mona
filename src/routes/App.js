import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Trash from '../pages/Trash';
import { Sidebar } from '../components';

export default function Routes() {
  const routesMeta = [
    {
      path: '/',
      component: Main,
      title: 'Todos',
      icon: 'FiLayers',
    },
    {
      path: '/trash',
      component: Trash,
      title: 'Lixeira',
      icon: 'FiTrash2',
    },
  ];

  return (
    <MemoryRouter>
      <Sidebar routes={routesMeta} />
      <Switch>
        {routesMeta.map((route, index) => (
          <Route
            key={String(index)}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </MemoryRouter>
  );
}
