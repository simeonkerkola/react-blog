import React from 'react';

import { totalComments, totalLikes } from '../../selectors/totals';

const PostsSummary = ({ posts }) => (
  <div>
    {console.log(posts)}
    <p>
      Viewing: {posts.length} {posts.length > 1 ? 'posts' : 'post'}
    </p>
    total comments: {totalComments(posts)}, likes: {totalLikes(posts)}
  </div>
);

export default PostsSummary;
