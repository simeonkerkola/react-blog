import React from 'react';
import { connect } from 'react-redux';
import PostForm from '../PostForm/PostForm';
import { createPost } from '../../actions/posts';

const CreatePostPage = props => (
  <div>
    CreatePostPage
    {console.log(props)}
    <PostForm
      // This prop is called in PostForm onSubmit function
      onSubmit={(newPost) => {
        props.dispatch(createPost(newPost));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(CreatePostPage);
