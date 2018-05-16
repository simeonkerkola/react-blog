import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { createPost } from './actions/posts';

import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';

import './styles/styles.css';

const store = configureStore();

store.dispatch(
  createPost({
    author: 'Me',
    title: 'My First Post',
    body: 'This is the post.',
    createdAt: 1526413301148,
    comments: 20,
    likes: 1,
  }),
);
store.dispatch(
  createPost({
    author: 'you',
    title: 'My Second Post',
    body: 'And this is another post',
    createdAt: 1526403301148,
    comments: 2,
    likes: 100,
  }),
);

store.dispatch(
  createPost({
    author: 'you',
    title: 'My third Post',
    body: 'Post is this',
    createdAt: 1526313301148,
    comments: 30,
    likes: 11,
  }),
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
