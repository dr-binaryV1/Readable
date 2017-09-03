import React from 'react';

export default function Post(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card text-left">
            <div className="card-body">
              <h4 className="card-title">{props.post.title}</h4>
              <p className="card-text">{props.post.body}</p>
              <a href="#" className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
        <div className="col">
          Column
        </div>
      </div>
    </div>
  )
} 