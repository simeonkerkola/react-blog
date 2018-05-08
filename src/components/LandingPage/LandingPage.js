import React, { Component } from 'react';
import PostFeed from '../PostFeed/PostFeed';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        Moi
        <PostFeed />
      </div>
    );
  }
}

export default LandingPage;
