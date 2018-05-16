import React from 'react';
import { connect } from 'react-redux';
import PostFeedItem from '../PostFeedItem/PostFeedItem';
import getVisiblePosts from '../../selectors/posts';

import { totalComments, totalLikes } from '../../selectors/totals';

const PostFeed = ({ posts }) => (
  <div>
    <p>
      Viewing: {posts.length} {posts.length > 1 ? 'posts' : 'post'}
    </p>
    total comments: {totalComments(posts)}, likes: {totalLikes(posts)}
    {posts.map(post => <PostFeedItem key={post.id} {...post} />)}
  </div>
);

const mapStateToProps = state => ({
  posts: getVisiblePosts(state.posts, state.filters),
});

export default connect(mapStateToProps)(PostFeed);
