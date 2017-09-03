import React from 'react';
import { Link } from 'react-router-dom';

import Vote from './Vote';

export default function Post(props) {
  const {post} = props;

  return (
    <div className="card text-left">
      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>
        <p className="card-text">{post.body}</p>

        <Link to={`/posts/${post.category}/${post.id}`} className="card-text">comment({`${post.comments ? post.comments.length : 0 }`})</Link>
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