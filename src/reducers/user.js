const postsReducerDefaultState = {
  usersPosts: [],
  displayName: 'Anonymous',
};
export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_USERS_POSTS':
      return { ...state, usersPosts: action.posts };
    case 'SET_DISPLAY_NAME':
      return { ...state, displayName: action.displayName };
    default:
      return state;
  }
};
