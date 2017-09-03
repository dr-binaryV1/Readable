import React from 'react';

export default function Post(props) {
  return (
    <div className="card text-left">
      <div className="card-body">
        <h4 className="card-title">{props.post.title}</h4>
        <p className="card-text">{props.post.body}</p>

        <a href="#" className="card-text">comments(0)</a>
        <br />
        
        <hr />
        <i><p className="card-text">Author: {props.post.author}</p></i>
        
        <a href="#" className="btn btn-primary">Edit</a>
        <a href="#" className="btn btn-danger">Delete</a>
      </div>
    </div>
  )
} 