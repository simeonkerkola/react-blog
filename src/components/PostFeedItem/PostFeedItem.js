import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';

const PostFeedItem = ({
  id, author, title, body, createdAt, likes, comments, tags, uid, auth,
}) => {
  const renderTags = () => tags.map(tag => <span key={tag}>{tag} </span>);
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h4>{moment(createdAt).format('ddd MMM Do YYYY @ HH:mm ')}</h4>
      <p>{body}</p>
      <div>
        <span>likes: {likes}</span> <span>comments: {comments}</span>
      </div>
      {tags.length > 0 && <div>tags: {renderTags()} </div>}
      {uid === auth.uid && <Link to={`/edit/${id}`}>Edit</Link>}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PostFeedItem);
