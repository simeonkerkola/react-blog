import uuid from 'uuid';

// createPost
export const createPost = ({
  author = 'Anonymous',
  title = '',
  body = '',
  tags = [],
  createdAt = 0,
  comments = 0,
  likes = 0,
} = {}) => ({
  type: 'CREATE_POST',
  post: {
    id: uuid(),
    author,
    title,
    body,
    tags,
    createdAt,
    comments,
    likes,
  },
});

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
