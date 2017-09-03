import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';

function PostsList(props) {
  const { posts, category } = props;

  return (
    <div>
      <div>
        <h3>Posts</h3>
        <hr />
        {posts && category ? posts.filter(post => 
          {return post.category === category}).map((post) => 
            <Post key={post.id} post={post} />) : posts ? posts.map((post) => 
              <Post key={post.id} post={post} />) : ''}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    posts: state.postData.posts
  }
}

export default connect(mapStateToProps)(PostsList);