import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { createPost } from './actions/posts';
import { setTextFilter } from './actions/filters';

import getVisiblePosts from './selectors/posts';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';

import './styles/styles.css';

const store = configureStore();

store.dispatch(
  createPost({
    author: 'Me',
    title: 'My First Post',
    body: 'This is the post.',
    createdAt: 1000,
    totalComments: 20,
    totalLikes: 1,
  }),
);
store.dispatch(
  createPost({
    author: 'you',
    title: 'My Second Post',
    body: 'And this is another post',
    createdAt: -1000,
    totalComments: 2,
    totalLikes: 100,
  }),
);

store.dispatch(
  createPost({
    author: 'you',
    title: 'My third Post',
    body: 'Post is this',
    createdAt: 666,
    totalComments: 30,
    totalLikes: 11,
  }),
);
console.log(store.getState());

store.dispatch(setTextFilter());
const state = store.getState();
const visiblePosts = getVisiblePosts(state.posts, state.filters);
console.log('visiblePosts', visiblePosts);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
