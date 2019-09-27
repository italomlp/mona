import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Trash from './pages/Trash';
import { Sidebar } from './components';

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
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <Sidebar routes={routesMeta} />
        <Switch>
          {routesMeta.map((route, index) => (
            <Route
              key={String(index)}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </MemoryRouter>
  );
}
