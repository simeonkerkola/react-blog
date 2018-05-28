import React, { Component } from 'react';

import { connect } from 'react-redux';

import PostForm from '../PostForm/PostForm';
import Layout from '../../Layout/Layout';

import { startEditPost, startRemovePost } from '../../../actions/posts';

class EditPostPage extends Component {
  onSubmit = (post) => {
    this.props.startEditPost(this.props.post.id, post);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemovePost({ id: this.props.post.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <Layout>
        <h2>Edit Post</h2>
        <PostForm post={this.props.post} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>remove</button>
      </Layout>
    );
  }
}

// Id comes from the addressbar
const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  startEditPost: (id, updates) => dispatch(startEditPost(id, updates)),
  startRemovePost: data => dispatch(startRemovePost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
