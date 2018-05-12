import uuid from 'uuid';

// createPost
export const createPost = ({
  author = 'Anonymous',
  title = '',
  body = '',
  tags = [],
  createdAt = 0,
  totalComments = 0,
  totalLikes = 0,
} = {}) => ({
  type: 'CREATE_POST',
  post: {
    id: uuid(),
    author,
    title,
    body,
    tags,
    createdAt,
    totalComments,
    totalLikes,
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
