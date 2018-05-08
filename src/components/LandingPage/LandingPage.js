import React, { Component } from 'react';
import PostFeed from '../PostFeed/PostFeed';
import PostFeedFilters from '../PostFeedFilters/PostFeedFilters';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <PostFeedFilters />
        <PostFeed />
      </div>
    );
  }
}

export default LandingPage;
