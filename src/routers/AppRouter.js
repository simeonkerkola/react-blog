import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LandingPage from '../components/LandingPage/LandingPage';
import CreatePostPage from '../components/CreatePostPage/CreatePostPage';
import EditPostPage from '../components/EditPostPage/EditPostPage';
import Header from '../components/Header/Header';
import HelpPage from '../components/HelpPage/HelpPage';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

// We have use separate history so component like the Header can redirect users
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/create" component={CreatePostPage} />
        <Route path="/edit/:id" component={EditPostPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
