import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../Layout/Layout';
import PostFeedItem from '../PostFeed/PostFeedItem/PostFeedItem';

const PostPage = ({ post }) => (
  <div>
    <Layout>
      <PostFeedItem {...post} />
    </Layout>
  </div>
);
const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id === props.match.params.id),
});
export default connect(mapStateToProps)(PostPage);
