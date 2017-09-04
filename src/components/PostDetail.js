import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import * as actions from '../actions';
import Comment from './Comment';
import Vote from './Vote';

class PostDetail extends Component {
  onSubmitComment() {
    const { postId } = this.props;
    const body = document.getElementById('comment').value;
    const author = document.getElementById('author').value;
    const id = uuid();
    const timestamp = new Date().getTime();

    const data = {
      id,
      timestamp,
      body,
      author,
      parentId: postId
    };

    this.props.postComment(data);
  }

  render() {
    const { posts, postId } = this.props;

    return (
      <div>{ posts ? posts.filter(p => {
        return p.id === postId }).map((post) => {
          return (
            <div key={post.id} className="text-left">
              <div className="card text-left">
                <div className="card-body">
                  <h4 className="card-title">{post.title}</h4>
                  <p className="card-text">{post.body}</p>

                  <Vote post={post} path="posts"/>
                  <br />
                  
                  <hr />
                  <i><p className="card-text">Author: {post.author}</p></i>
                  
                  <a href="/edit" className="btn btn-primary">Edit</a>
                  <a href="/delete" className="btn btn-danger">Delete</a>
                </div>
              </div>
              <br />
              <h4>Comments</h4>
              {post.comments ? post.comments.map(comment => {
                return <Comment key={comment.id} comment={comment}/>
              }) 
              : <h6>No Comments at this time.</h6>}
            </div>
          )
        }) 
        : ''}

        <div className="card border-light mb-3 text-left">
          <div className="card-header">Add Comment</div>
          <div className="card-body">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                name="author"
                id="author"
                className="form-control col-4"
                type="text"
                placeholder="Enter author name"
                required />
              <br />
              <textarea
                name="comment"
                id="comment"
                className="form-control col-8" 
                rows="3" 
                placeholder="Add comment here..." />
              <br />
              <button 
                onClick={this.onSubmitComment.bind(this)}
                className="btn btn-primary">Post Comment</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postData.posts
  }
}

export default connect(mapStateToProps, actions)(PostDetail);