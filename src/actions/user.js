import database from '../firebase/firebase';

// setMyPosts
export const setMyPosts = posts => ({
  type: 'SET_MY_POSTS',
  posts,
});

// startSetMyPosts
export const startSetMyPosts = () => (dispatch, getState) => {
  const { uid } = getState().auth;
  return (
    database
      .ref(`users/${uid}/posts`)
      // .orderByChild('uid')
      // .equalTo(uid)
      .on('value', (snapshot) => {
        const posts = [];
        snapshot.forEach((childSnapshot) => {
          // .unshift; add to the beginning of an array
          // Create an id; if tags, create an array of them values; spread the rest of the values
          posts.unshift({
            id: childSnapshot.key,
            tags: childSnapshot.val().tags ? Object.values(childSnapshot.val().tags) : [],
            ...childSnapshot.val(),
          });
        });
        dispatch(setMyPosts(posts));
      })
  );
};

// getUsersPosts
export const getUsersPosts = posts => ({
  type: 'GET_USERS_POSTS',
  posts,
});

// startGetUsersPosts
export const startGetUsersPosts = uid => dispatch =>
  database
    .ref(`users/${uid}/posts`)
    // .orderByChild('uid')
    // .equalTo(uid)
    .once('value')
    .then((snapshot) => {
      const posts = [];
      snapshot.forEach((childSnapshot) => {
        // .unshift; add to the beginning of an array
        // Create an id; if tags, create an array of them values; spread the rest of the values
        posts.unshift({
          id: childSnapshot.key,
          tags: childSnapshot.val().tags ? Object.values(childSnapshot.val().tags) : [],
          ...childSnapshot.val(),
        });
      });
      dispatch(getUsersPosts(posts));
    });
