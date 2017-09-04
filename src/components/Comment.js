import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Vote from './Vote';

class Comment extends Component {
  onDeleteClicked() {
    this.props.deleteContent(this.props.comment.id, 'comments');
  }

  render() {
    const { comment } = this.props;
    const date = new Date().toDateString(comment.timestamp);

    return (
      <div className="card">
        <div className="card-body text-white bg-primary">
          <div className="row">
            <div className="col-10">
              <p className="card-text">{comment.body}</p>
            </div>
            <div className="col-2">
              <Vote post={comment} path="comments" />
            </div>
          </div>
        </div>
        <div className="card-footer text-white bg-dark">
          Author: {comment.author} | Date Posted: {date}
          <div className="float-md-right">
            <button className="btn btn-primary">Edit</button>
            <button onClick={this.onDeleteClicked.bind(this)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Comment);