import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from '../reducers/posts';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import userReducer from '../reducers/user';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      filters: filtersReducer,
      auth: authReducer,
      user: userReducer,
    }),
    composeEnchancers(applyMiddleware(thunk)),
  );
  return store;
};
