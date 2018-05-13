import { createStore, combineReducers } from 'redux';
import postsReducer from '../reducers/posts';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({ posts: postsReducer, filters: filtersReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};
