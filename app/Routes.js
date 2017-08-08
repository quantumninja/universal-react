import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import NoMatch from './containers/NoMatch';
import universal from 'react-universal-component'

const Home = universal(props => import(`./containers/Home`));
const User = universal(props => import(`./containers/User`));

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="user/:id" component={User} />
    <Route path="*" component={NoMatch} />
  </Route>
);
