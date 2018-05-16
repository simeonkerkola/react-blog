import React from 'react';
import { connect } from 'react-redux';

import getVisiblePosts from '../../selectors/posts';
import { totalComments, totalLikes } from '../../selectors/totals';

const PostsSummary = ({ postsCount, totalLikes, totalComments }) => (
  <div>
    <p>
      Viewing: {postsCount} {postsCount === 1 ? 'post' : 'posts'}
    </p>
    total comments: {totalComments}, likes: {totalLikes}
  </div>
);

const mapStateToProps = (state) => {
  const visiblePosts = getVisiblePosts(state.posts, state.filters);

  return {
    postsCount: visiblePosts.length,
    totalLikes: totalLikes(visiblePosts),
    totalComments: totalComments(visiblePosts),
  };
};

export default connect(mapStateToProps)(PostsSummary);
