import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../PostForm/PostForm';
import { startCreatePost } from '../../actions/posts';
import Layout from '../Layout/Layout';

class CreatePostPage extends Component {
  onSubmit = (post) => {
    this.props.startCreatePost(post);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <Layout>
          CreatePostPage
          <PostForm
            // This prop is called in PostForm onSubmit function
            onSubmit={this.onSubmit}
          />
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startCreatePost: post => dispatch(startCreatePost(post)),
});

export default connect(undefined, mapDispatchToProps)(CreatePostPage);
