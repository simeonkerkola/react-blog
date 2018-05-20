import React, { Component } from 'react';
import PostFeed from '../PostFeed/PostFeed';
import PostFeedFilters from '../PostFeedFilters/PostFeedFilters';
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
