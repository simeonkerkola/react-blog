import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../Layout/Layout';
import PostFeedItem from '../Posts/PostFeed/PostFeedItem/PostFeedItem';
import { startGetUsersPosts } from '../../actions/user';

class UserPage extends Component {
  componentDidMount() {
    this.props.startGetUsersPosts(this.props.match.params.id);
  }
  render() {
    return (
      <Layout>
        {this.props.usersPosts.map(post => <PostFeedItem key={post.id} {...post} />)}
        UserPage
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  usersPosts: state.user.usersPosts,
});

const mapDispatchToProps = dispatch => ({
  startGetUsersPosts: id => dispatch(startGetUsersPosts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
