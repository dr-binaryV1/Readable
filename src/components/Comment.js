import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdCreate from 'react-icons/lib/md/create';
import MdDelete from 'react-icons/lib/md/delete';
import MdDateRange from 'react-icons/lib/md/date-range';

import * as actions from '../actions';
import EditComment from './EditComment';
import Vote from './Vote';

class Comment extends Component {
  onDeleteClicked() {
    this.props.deleteContent(this.props.comment.id, 'comments');
  }

  render() {
    const { comment } = this.props;
    const date = new Date(comment.timestamp).toDateString();

    return (
        <div>
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
        <MdAccountCircle size={30}/> {comment.author} | <MdDateRange size={25} /> {date}
          <div className="float-md-right">
            <button
                onClick={() => { document.getElementById(comment.id).style.display = "block" }}
                className="btn btn-primary"><MdCreate /> Edit</button>
            <button onClick={this.onDeleteClicked.bind(this)} className="btn btn-danger"><MdDelete /> Delete</button>
          </div>
        </div>
      </div>
        <div id={comment.id} className="edit-comment-container">
            <EditComment comment={comment} />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Comment);
