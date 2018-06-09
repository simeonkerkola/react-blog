import database from '../firebase/firebase';

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

// setDisplayName
export const setDisplayName = displayName => ({
  type: 'SET_DISPLAY_NAME',
  displayName,
});

// // startSetDisplayName
// export const startSetDisplayname = (uid, displayName) => dispatch =>
//   database
//     .ref(`users/${uid}/displayName`)
//     .set(displayName)
//     .then(dispatch(setDisplayName(displayName)));
