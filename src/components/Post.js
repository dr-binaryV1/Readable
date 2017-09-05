import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MdComment from 'react-icons/lib/md/comment';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdDateRange from 'react-icons/lib/md/date-range';
import MdCreate from 'react-icons/lib/md/create';
import MdDelete from 'react-icons/lib/md/delete';
import { deleteContent } from '../actions';
import EditPost from './EditPost';

import Vote from './Vote';

class Post extends Component {
  onDeleteClicked() {
    this.props.deleteContent(this.props.post.id, 'posts');
  }

  render() {
    const { post } = this.props;
    const date = new Date(post.timestamp).toDateString();

    return (
      <div>
        <div className="post-cards card text-left text-white bg-dark card-margin-bottom">
          <div className="card-body">
            <Link
              to={`/${post.category}/${post.id}`}
              className="card-text">
              <h4 className="card-title">{post.title}</h4>
            </Link>
            <div className="row">
              <div className="col-10">
                <p className="card-text">{post.body}</p>
                <p><MdComment size={30} /> Comments ({`${post.comments ? post.comments.length : 0 }`})</p>
              </div>
              <div className="col-2">
                <Vote post={post} path="posts"/>
              </div>
            </div>
            <hr />
            <p className="card-text author"><MdAccountCircle size={25}/> {post.author} | <MdDateRange size={25} /> {date}</p>
            <div className="post-buttons float-md-right">
              <button
                onClick={() => { document.getElementById(post.id).style.display = "block" }}
                className="btn btn-primary"><MdCreate /> Edit</button>
              <button onClick={this.onDeleteClicked.bind(this)} className="btn btn-danger"><MdDelete /> Delete</button>
            </div>
          </div>
        </div>
        <div id={post.id} className="edit-post-container">
          <EditPost post={ post } />
        </div>
      </div>
    )
  }
}

export default connect(null, { deleteContent })(Post);
