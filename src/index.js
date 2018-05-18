import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize-css';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { startSetPosts } from './actions/posts';

import './firebase/firebase';
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

store.dispatch(startSetPosts()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
});

registerServiceWorker();
