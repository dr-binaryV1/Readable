import React from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';

import * as actions from '../actions';
import Post from './Post';

function PostsList(props) {
  const { posts, category } = props;

  function onFilterChange() {
    const { posts } = props;
    const filterControl = document.getElementById("filter-post");
    const filterBy = filterControl.options[filterControl.selectedIndex].value;

    props.sortPosts(posts.sort(sortBy(filterBy)), filterBy);
  }

  return (
    <div>
      <div className="filter-control-container">
        <select
          onChange={() => onFilterChange()}
          defaultValue="none"
          id="filter-post"
          className="form-control col-2">
            <option disabled value="none">Filter Post</option>
            <option value="timestamp">Date</option>
            <option value="voteScore">Vote Score</option>
        </select>
      </div>
      {posts && category ? posts.filter(post =>
        {return post.category === category}).map((post) =>
          post.deleted !== true ? <Post key={post.id} post={post} /> : '')
            : posts ? posts.map((post) =>
              post.deleted !== true ? <Post key={post.id} post={post} /> : '')
                : <h4>There are no Post for '{ category }' at this time.</h4>}
    </div>
  )
}


function mapStateToProps(state) {
  return {
    posts: state.postData.posts,
    sortBy: state.postData.sortBy
  }
}

export default connect(mapStateToProps, actions)(PostsList);
