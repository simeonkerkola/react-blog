import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostFeedItem = ({
  id, author, title, body, createdAt, totalLikes, totalComments,
}) => (
  <div>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <h4>{moment(createdAt).format('ddd MMM Mo YYYY @ H:m ')}</h4>
    <p>{body}</p>
    <div>
      <span>likes: {totalLikes}</span> <span>comments: {totalComments}</span>
    </div>
    <Link to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default PostFeedItem;
