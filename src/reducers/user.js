const postsReducerDefaultState = [];
export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_USERS_POSTS':
      return action.posts;

    default:
      return state;
  }
};
