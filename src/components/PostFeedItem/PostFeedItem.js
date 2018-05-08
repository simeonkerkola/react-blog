import React from 'react';

const PostFeedItem = ({
  author, title, body, createdAt,
}) => (
  <div>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <h4>{createdAt}</h4>
    <p>{body}</p>
  </div>
);

export default PostFeedItem;
