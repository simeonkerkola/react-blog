import React, { Component } from 'react';

import { connect } from 'react-redux';

import PostForm from '../PostForm/PostForm';
import { editPost, removePost } from '../../actions/posts';

class EditPostPage extends Component {
  onSubmit = (post) => {
    this.props.editPost(this.props.post.id, post);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removePost({ id: this.props.post.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h2>Edit Post</h2>
        <PostForm post={this.props.post} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>remove</button>
      </div>
    );
  }
}

// Id comes from the addressbar
const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  editPost: (id, updates) => dispatch(editPost(id, updates)),
  removePost: data => dispatch(removePost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
