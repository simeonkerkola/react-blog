import React from 'react';
import { connect } from 'react-redux';
import PostForm from '../PostForm/PostForm';
import { startCreatePost } from '../../actions/posts';

const CreatePostPage = (props) => {
  const createNewPost = (newPost) => {
    console.log(newPost);
    props.dispatch(startCreatePost(newPost));
    props.history.push('/');
  };
  return (
    <div>
      CreatePostPage
      {console.log(props)}
      <PostForm
        // This prop is called in PostForm onSubmit function
        onSubmit={createNewPost}
      />
    </div>
  );
};

export default connect()(CreatePostPage);
