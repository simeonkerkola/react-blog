import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../Layout/Layout';
import PostFeedItem from '../Posts/PostFeed/PostFeedItem/PostFeedItem';
import { startGetUsersPosts } from '../../actions/user';

class UserPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params);
    props.startGetUsersPosts(this.props.match.params.uid);
  }
  render() {
    return (
      <Layout>
        {this.props.usersPosts.length > 0 ? (
          <div>
            <h2>{this.props.usersPosts[0].author}</h2>
            <h3>posts</h3>

            {this.props.usersPosts.map(post => <PostFeedItem key={post.id} {...post} />)}
          </div>
        ) : (
          <div>No posts to show :(</div>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  state,
  usersPosts: state.user.usersPosts,
});

const mapDispatchToProps = dispatch => ({
  startGetUsersPosts: uid => dispatch(startGetUsersPosts(uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
