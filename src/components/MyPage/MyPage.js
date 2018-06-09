import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../Layout/Layout';
import PostFeedItem from '../Posts/PostFeed/PostFeedItem/PostFeedItem';
import { startGetUsersPosts } from '../../actions/user';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    console.log(this.props);
    this.props.startGetUsersPosts(this.props.uid).then(() => {
      this.setState({
        loading: false,
      });
    });
  }
  render() {
    return (
      <Layout>
        <h2>My page</h2>
        {this.state.loading ? (
          'loading...'
        ) : (
          <div>
            {this.props.myPosts.length > 0
              ? this.props.myPosts.map(post => <PostFeedItem key={post.id} {...post} />)
              : 'You have no posts here :('}
          </div>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  state,
  uid: state.auth.uid,
  myPosts: state.user.usersPosts,
});

const mapDispatchToProps = dispatch => ({
  startGetUsersPosts: uid => dispatch(startGetUsersPosts(uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
