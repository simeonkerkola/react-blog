import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize-css';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { startSetPosts } from './actions/posts';

import { firebase } from './firebase/firebase';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';

import './styles/styles.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

// Fetch the posts from firebase, and then render the app
store.dispatch(startSetPosts()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('logged in');
  } else console.log('logged out');
});

registerServiceWorker();
