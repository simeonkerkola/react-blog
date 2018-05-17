import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from '../reducers/posts';
import filtersReducer from '../reducers/filters';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({ posts: postsReducer, filters: filtersReducer }),
    composeEnchancers(applyMiddleware(thunk)),
  );
  return store;
};
