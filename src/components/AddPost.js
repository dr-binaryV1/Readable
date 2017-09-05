import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import MdCreate from 'react-icons/lib/md/create';
import uuid from 'uuid';

import { postContent } from '../actions';

class AddPost extends Component {
  onSubmitPost() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const body = document.getElementById('body').value;
    const categories = document.getElementById('category');
    const category = categories.options[categories.options.selectedIndex].value;
    const id = uuid();
    const timestamp = new Date().getTime();

    const data = {
      id,
      title,
      author,
      body,
      category,
      timestamp
    }

    this.props.postContent(data, 'posts');
    this.props.history.push('/');
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        <div className="card bg-light mb-3">
          <div className="card-header">Add Post</div>
          <div className="card-body">
            <form onSubmit={(e) => e.preventDefault()}>
              <input 
                className="form-control col-4"
                name="title"
                id="title" 
                type="text" 
                placeholder="Title" />
              <br />

              <input
                className="form-control col-4"
                name="author"
                id="author"
                type="text"
                placeholder="Author" />
              <br />

              <select className="form-control col-2" name="category" id="category">
              { categories ? categories.map(category => { 
                return <option key={category.name} value={category.name}>{category.name}</option> }) 
                : ''}
              </select>
              <br />

              <textarea
                className="form-control col-8"
                name="body"
                id="body"
                cols="3"
                placeholder="Enter Post..." />
              <br />

              <button
                onClick={this.onSubmitPost.bind(this)}
                className="btn btn-primary float-md-left">
                <MdCreate /> Submit Post
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryData.categories
  }
}

export default withRouter(connect(mapStateToProps, { postContent })(AddPost));