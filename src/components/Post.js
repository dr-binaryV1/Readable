import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Vote from './Vote';

class Post extends Component {
  onDeleteClicked() {
    this.props.deleteContent(this.props.post.id, 'posts');
  }

  render() {
    const {post, history} = this.props;
    const date = new Date().toDateString(post.timestamp);

    return (
      <div className="post-cards card text-left text-white bg-dark card-margin-bottom">
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <div className="row">
            <div className="col-10">
              <p className="card-text">
              <p className="card-text">{post.body}</p>
                <Link 
                  to={`/${post.category}/${post.id}`} 
                  className="card-text">
                    comments ({`${post.comments ? post.comments.length : 0 }`})
                </Link>
              </p>
            </div>
            <div className="col-2">
              <Vote post={post} path="posts"/>
            </div>
          </div>
          <hr />
          <p className="card-text author">Author: {post.author} | Date Posted: {date}</p>
          
          <div className="post-buttons float-md-right">
            <button onClick={() => history.push('/edit')} className="btn btn-primary">Edit</button>
            <button onClick={() => history.push('/delete')} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Post);