import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostFeedItem = ({
  id, author, title, body, createdAt, likes, comments,
}) => (
  <div>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <h4>{moment(createdAt).format('ddd MMM Do YYYY @ HH:mm ')}</h4>
    <p>{body}</p>
    <div>
      <span>likes: {likes}</span> <span>comments: {comments}</span>
    </div>
    <Link to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default PostFeedItem;
