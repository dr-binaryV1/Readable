import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';

class PostsList extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts ? posts.map((post) => <Post post={post} />) : ''}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postData.posts
  }
}

export default connect(mapStateToProps)(PostsList);