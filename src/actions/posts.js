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
      console.log('ref', ref);
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

// editPost
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates,
});
