import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Vote from './Vote';

class Post extends Component {
  onDeleteClicked() {
    this.props.deletePost(this.props.post.id);
  }

  render() {
    const {post} = this.props;

    return (
      <div className="card text-left text-white bg-dark">
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <p className="card-text">{post.body}</p>
          <Link 
            to={`/${post.category}/${post.id}`} 
            className="card-text">
              comments ({`${post.comments ? post.comments.length : 0 }`})
          </Link>
          <Vote post={post} path="posts"/>
          <br />
          <hr />
          <i><p className="card-text">Author: {post.author}</p></i>
          
          <a href="/edit" className="btn btn-primary">Edit</a>
          <button
            onClick={this.onDeleteClicked.bind(this)}
            className="btn btn-danger">
              Delete
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Post);