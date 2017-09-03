import React from 'react';

export default function Comment(props) {
  const { comment } = props;
  const date = new Date().toDateString(comment.timestamp);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer bg-transparent">
      Author: {comment.author} | Date Posted: {date}
      </div>
    </div>
  )
}