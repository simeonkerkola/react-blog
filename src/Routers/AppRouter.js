import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/LandingPage/LandingPage';
import CreatePostPage from '../components/CreatePostPage/CreatePostPage';
import EditPostPage from '../components/EditPostPage/EditPostPage';
import Header from '../components/Header/Header';
import HelpPage from '../components/HelpPage/HelpPage';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default AppRouter;
