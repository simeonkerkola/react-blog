import database from '../firebase/firebase';

// helpers
const usersRef = (userId, postId) => database.ref(`users/${userId}/posts/${postId}`);
const postsRef = postId => database.ref(`posts/${postId}`);

// createPost
export const createPost = post => ({
  type: 'CREATE_POST',
  post,
});

export const startCreatePost = (postData = {}) => (dispatch, getState) => {
  const { uid, displayName } = getState().auth;
  const {
    title = '', body = '', tags = [], createdAt = 0, comments = 0, likes = 0,
  } = postData;
  const post = {
    author: displayName,
    title,
    body,
    tags,
    createdAt,
    comments,
    likes,
    uid,
  };
  database
    .ref(`users/${uid}/posts`)
    .push(post)
    .then((ref) => {
      postsRef(ref.key).update(post);
      dispatch(
        createPost({
          id: ref.key,
          ...post,
        }),
      );
    })
    .catch(err => console.log('error', err.message));
};

// removePost
export const removePost = ({ id }) => ({
  type: 'REMOVE_POST',
  id,
});

// startRemovePosts
export const startRemovePost = ({ id }) => (dispatch, getState) => {
  const { uid } = getState().auth;

  // Remove from users data and post list
  Promise.all([usersRef(uid, id).remove(), postsRef(id).remove()])
    .then(() => {
      dispatch(removePost({ id }));
    })
    .catch(err => console.log('Failed to remove:', err.message));
};

// editPost
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates,
});

// startEditPost
export const startEditPost = (id, updates) => (dispatch, getState) => {
  const { uid } = getState().auth;
  Promise.all([usersRef(uid, id).update(updates), postsRef(id).update(updates)])
    .then(() => {
      dispatch(editPost(id, updates));
    })
    .catch(err => console.log('update failed', err.message));
};

// setPosts
export const setPosts = posts => ({
  type: 'SET_POSTS',
  posts,
});

// startSetPosts
export const startSetPosts = () => (dispatch, getState) =>
  database
    .ref('posts')
    //  .limitToLast(10)
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
      dispatch(setPosts(posts));
    });
