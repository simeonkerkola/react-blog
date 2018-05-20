import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LandingPage from '../components/LandingPage/LandingPage';
import CreatePostPage from '../components/CreatePostPage/CreatePostPage';
import EditPostPage from '../components/EditPostPage/EditPostPage';
import Header from '../components/Header/Header';
import HelpPage from '../components/HelpPage/HelpPage';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import UserPage from '../components/UserPage/UserPage';

import PrivateRoute from './PrivateRoute';

// We have use separate history so components outside the Routes, like the Header can redirect users
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <PrivateRoute path="/create" component={CreatePostPage} />
        <PrivateRoute path="/edit/:id" component={EditPostPage} />
        <Route path="/user/:id" component={UserPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
