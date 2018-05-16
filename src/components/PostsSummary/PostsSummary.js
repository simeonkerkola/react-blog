import React from 'react';
import { connect } from 'react-redux';

import getVisiblePosts from '../../selectors/posts';
import { totalComments, totalLikes } from '../../selectors/totals';

const PostsSummary = ({ posts }) => (
  <div>
    {console.log(posts)}
    <p>
      Viewing: {posts.length} {posts.length === 1 ? 'posts' : 'post'}
    </p>
    total comments: {totalComments(posts)}, likes: {totalLikes(posts)}
  </div>
);

const mapStateToProps = state => ({
  posts: getVisiblePosts(state.posts, state.filters),
});

export default connect(mapStateToProps)(PostsSummary);
