import database from '../firebase/firebase';

// setUsersPosts
export const setUsersPosts = posts => ({
  type: 'SET_USERS_POSTS',
  posts,
});

// startSetUsersPosts
export const startSetUsersPosts = () => (dispatch, getState) => {
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
        dispatch(setUsersPosts(posts));
      })
  );
};
