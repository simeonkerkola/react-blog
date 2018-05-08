import React from 'react';
import { connect } from 'react-redux';

import { removePost } from '../../actions/posts';

const PostFeedItem = ({
  dispatch,
  id,
  author,
  title,
  body,
  createdAt,
  totalLikes,
  totalComments,
}) => (
  <div>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <h4>{createdAt}</h4>
    <p>{body}</p>
    <div>
      <span>likes: {totalLikes}</span> <span>comments: {totalComments}</span>
    </div>
    <button
      onClick={() => {
        dispatch(removePost({ id }));
        console.log('click');
      }}
    >
      remove
    </button>
  </div>
);

export default connect()(PostFeedItem);
