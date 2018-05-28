import React, { Component } from 'react';
import PostFeed from '../Posts/PostFeed/PostFeed';
import PostFeedFilters from '../Posts/PostFeed/PostFeedFilters/PostFeedFilters';
import Layout from '../Layout/Layout';

class LandingPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <PostFeedFilters />
          <PostFeed />
        </div>
      </Layout>
    );
  }
}

export default LandingPage;
