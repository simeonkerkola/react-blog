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
    this.props.startGetUsersPosts(this.props.match.params.uid).then(() => {
      this.setState({
        loading: false,
      });
    });
  }

  // static getDerivedStateFromProps(props, state) {
  //   this.onUserPageChange().then(() => {
  //     this.onUserPageChange = null;
  //     this.setState({
  //       loading: false,
  //     });
  //   });
  //   return null;
  // }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <p>loading...</p>
        ) : (
          <div>
            {this.props.usersPosts.length > 0 ? (
              <div>
                <h2>{this.props.usersPosts[0].author}</h2>
                <h3>posts</h3>

                {this.props.usersPosts.map(post => <PostFeedItem key={post.id} {...post} />)}
              </div>
            ) : (
              <div>No posts to show :(</div>
            )}
          </div>
        )}

        {/* <UserData state={this.state} {...this.props} location={this.props.location} /> */}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  userId: !!state.auth && state.auth.uid,
  usersPosts: state.user.usersPosts,
  displayName: state.user.displayName,
});

const mapDispatchToProps = dispatch => ({
  startGetUsersPosts: uid => dispatch(startGetUsersPosts(uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
