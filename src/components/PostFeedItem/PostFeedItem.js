import React from 'react';
import { connect } from 'react-redux';

import { removePost } from '../../actions/posts';

const PostFeedItem = ({
  dispatch, id, author, title, body, createdAt,
}) => (
  <div>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <h4>{createdAt}</h4>
    <p>{body}</p>
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
