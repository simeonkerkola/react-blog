const postsReducerDefaultState = {
  myPosts: [],
  usersPosts: [],
};
export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_MY_POSTS':
      return { ...state, myPosts: action.posts };
    case 'GET_USERS_POSTS':
      return { ...state, usersPosts: action.posts };
    default:
      return state;
  }
};
