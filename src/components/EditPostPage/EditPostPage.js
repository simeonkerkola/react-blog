import React from 'react';
import { connect } from 'react-redux';

import PostForm from '../PostForm/PostForm';
import { editPost, removePost } from '../../actions/posts';

const EditPostPage = (props) => {
  const updatePost = (post) => {
    props.dispatch(editPost(props.post.id, post));
    props.history.push('/');
  };
  return (
    <div>
      <h2>Edit Post</h2>
      <PostForm post={props.post} onSubmit={updatePost} />
      <button
        onClick={() => {
          props.dispatch(removePost({ id: props.post.id }));
          props.history.push('/');
        }}
      >
        remove
      </button>
    </div>
  );
};

// Id comes from the addressbar
const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditPostPage);
