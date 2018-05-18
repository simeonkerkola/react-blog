import uuid from 'uuid';
import database from '../firebase/firebase';

// createPost
export const createPost = post => ({
  type: 'CREATE_POST',
  post,
});

export const startCreatePost = (postData = {}) => (dispatch) => {
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
  };
  database
    .ref('posts')
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

export const startRemovePosts = ({ id }) => (dispatch) => {
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

// setPosts
export const setPosts = posts => ({
  type: 'SET_POSTS',
  posts,
});

export const startSetPosts = () => dispatch =>
  database
    .ref('posts')
    .once('value')
    .then((snapshot) => {
      const posts = [];
      snapshot.forEach((childSnapshot) => {
        posts.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
      dispatch(setPosts(posts));
    });
