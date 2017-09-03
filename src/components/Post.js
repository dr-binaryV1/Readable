import React from 'react';

import Vote from './Vote';

export default function Post(props) {
  const {post} = props;

  return (
    <div className="card text-left">
      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>
        <p className="card-text">{post.body}</p>

        <a href="/comments" className="card-text">comment({`${post.comments ? post.comments.length : 0 }`})</a>
        <Vote post={post}/>
        <br />
        
        <hr />
        <i><p className="card-text">Author: {post.author}</p></i>
        
        <a href="/edit" className="btn btn-primary">Edit</a>
        <a href="/delete" className="btn btn-danger">Delete</a>
      </div>
    </div>
  )
} 