import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../Layout/Layout';
import PostFeedItem from '../PostFeedItem/PostFeedItem';

class UserPage extends Component {
  render() {
    return (
      <Layout>
        {this.props.posts.map(post => <PostFeedItem key={post.id} {...post} />)}
        UserPage
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.user,
});

export default connect(mapStateToProps)(UserPage);
