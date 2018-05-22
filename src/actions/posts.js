import database from '../firebase/firebase';

// createPost
export const createPost = post => ({
  type: 'CREATE_POST',
  post,
});

export const startCreatePost = (postData = {}) => (dispatch, getState) => {
  const { uid } = getState().auth;
  const {
    author = 'Anonymous',
    title = '',
    body = '',
    tags = [],
    createdAt = 0,
    comments = 0,
    likes = 0,
  } = postData;
  const post = {
    author,
    title,
    body,
    tags,
    createdAt,
    comments,
    likes,
    uid,
  };
  database
    .ref('/posts/')
    .push(post)
    .then((ref) => {
      dispatch(
        createPost({
          id: ref.key,
          ...post,
        }),
      );
    });
};

// removePost
export const removePost = ({ id }) => ({
  type: 'REMOVE_POST',
  id,
});

// startRemovePosts
export const startRemovePost = ({ id }) => (dispatch, getState) => {
  const { uid } = getState().auth;
  database
    .ref(`posts/${id}`)
    .remove()
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
  database
    .ref(`posts/${id}`)
    .update({ ...updates })
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
