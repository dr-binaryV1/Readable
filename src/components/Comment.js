import React from 'react';

import Vote from './Vote';

export default function Comment(props) {
  const { comment } = props;
  const date = new Date().toDateString(comment.timestamp);

  return (
    <div className="card">
      <div className="card-body text-white bg-primary">
        <div className="row">
          <div className="col-6">
            <p className="card-text">{comment.body}</p>
          </div>
          <div className="col-6">
            <Vote post={comment} path="comments" />
          </div>
        </div>
      </div>
      <div className="card-footer text-white bg-dark">
        Author: {comment.author} | Date Posted: {date}
        <div className="float-md-right">
          <a href="/edit" className="btn btn-primary">Edit</a>
          <a href="/delete" className="btn btn-danger">Delete</a>
        </div>
      </div>
    </div>
  )
}