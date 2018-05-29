import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LandingPage from '../components/LandingPage/LandingPage';
import CreatePostPage from '../components/Posts/CreatePostPage/CreatePostPage';
import EditPostPage from '../components/Posts/EditPostPage/EditPostPage';
import HelpPage from '../components/HelpPage/HelpPage';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import UserPage from '../components/UserPage/UserPage';
import MyPage from '../components/MyPage/MyPage';
import PostPage from '../components/Posts/PostPage/PostPage';

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
        <PrivateRoute path="/mypage" component={MyPage} />
        <Route path="/user/:uid" component={UserPage} exact />
        <Route path="/user/:uid/:id" component={PostPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
