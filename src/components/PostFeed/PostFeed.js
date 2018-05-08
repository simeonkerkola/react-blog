import React from 'react';
import { connect } from 'react-redux';
import PostFeedItem from '../PostFeedItem/PostFeedItem';
import getVisiblePosts from '../../selectors/posts';

const PostFeed = props => (
  <div>
    tsxt {props.posts.length}
    {props.posts.map(post => <PostFeedItem key={post.id} {...post} />)}
  </div>
);

const mapStateToProps = state => ({
  posts: getVisiblePosts(state.posts, state.filters),
});

export default connect(mapStateToProps)(PostFeed);
