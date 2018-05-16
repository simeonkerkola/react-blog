import React from 'react';
import { connect } from 'react-redux';
import PostFeedItem from '../PostFeedItem/PostFeedItem';
import getVisiblePosts from '../../selectors/posts';

import PostsSummary from '../PostsSummary/PostsSummary';

const PostFeed = ({ posts }) => (
  <div>
    <PostsSummary posts={posts} />
    {posts.map(post => <PostFeedItem key={post.id} {...post} />)}
  </div>
);

const mapStateToProps = state => ({
  posts: getVisiblePosts(state.posts, state.filters),
});

export default connect(mapStateToProps)(PostFeed);
