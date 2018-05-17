import React from 'react';
import { connect } from 'react-redux';
import PostForm from '../PostForm/PostForm';
import { startCreatePost } from '../../actions/posts';

const CreatePostPage = props => (
  <div>
    CreatePostPage
    <PostForm
      // This prop is called in PostForm onSubmit function
      onSubmit={props.createNewPost}
    />
  </div>
);

const mapDispatchToProps = (dispatch, props) => ({
  createNewPost: (post) => {
    dispatch(startCreatePost(post));
    props.history.push('/');
  },
});

export default connect(undefined, mapDispatchToProps)(CreatePostPage);
