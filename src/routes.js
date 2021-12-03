import React from 'react';
import { Main, NotFound, PlayerVideo} from 'views';

const routes = [
  {
    path: '/',
    component: () => <Main />,
    exact: true,
  },
  {
    path: '/elections',
    component: () => <PlayerVideo />,
    exact: true,
  },
  {
    path: '*',
    component: () => <NotFound />,
    exact: true,
  },
];

export default routes;
