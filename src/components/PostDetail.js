import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdDateRange from 'react-icons/lib/md/date-range';
import MdCreate from 'react-icons/lib/md/create';
import MdDelete from 'react-icons/lib/md/delete';

import * as actions from '../actions';
import EditPost from './EditPost';
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

    this.props.postContent(data, 'comments');
  }

  render() {
    const { posts, postId, history } = this.props;

    return (
      <div>{ posts ? posts.filter(p => {
        return p.id === postId }).map((post) => {
          return (
            <div key={post.id} className="text-left">
              <div className="post-cards card text-left">
                <div className="card-body">
                  <h4 className="card-title">{post.title}</h4>
                  <div className="row">
                    <div className="col-10">
                      <p className="card-text">{post.body}</p>
                    </div>
                    <div className="col-2">
                      <Vote post={post} path="posts"/>
                    </div>
                  </div>
                  <hr />
                  <p className="card-text author">
                    <MdAccountCircle size={30}/>
                    {post.author} | <MdDateRange size={25} />
                    {new Date(post.timestamp).toDateString()}
                  </p>
                  <div className="post-buttons float-md-right">
                    <button
                        onClick={() => { document.getElementById(post.id).style.display = "block" }}
                      className="btn btn-primary">
                      <MdCreate /> Edit
                    </button>
                    <button
                      onClick={() => {
                        this.props.deleteContent(post.id, 'posts');
                        history.push('/');
                      }}
                      className="btn btn-danger"><MdDelete /> Delete</button>
                  </div>
                </div>
              </div>
              <div id={post.id} className="edit-post-container">
                <EditPost post={ post } />
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
                className="btn btn-primary"><MdCreate /> Post Comment</button>
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

export default withRouter(connect(mapStateToProps, actions)(PostDetail));
