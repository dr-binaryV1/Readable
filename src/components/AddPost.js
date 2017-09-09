import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MdSend from 'react-icons/lib/md/send';
import uuid from 'uuid';

import { postContent } from '../actions';

class AddPost extends Component {
  onSubmitPost(e) {
    e.preventDefault();

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
          <div className="card-header bg-dark text-white">Add Post</div>
          <div className="card-body">
            <form onSubmit={(e) => this.onSubmitPost(e)}>
              <input
                className="form-control col-4"
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required />
              <br />

              <input
                className="form-control col-4"
                name="author"
                id="author"
                type="text"
                placeholder="Author"
                required />
              <br />

              <select className="form-control col-2" name="category" id="category">
              { categories ? categories.map(category => {
                const formattedCategory = category.name.charAt(0).toUpperCase() + category.name.slice(1);
                return <option key={formattedCategory} value={category.name}>{formattedCategory}</option> })
                : ''}
              </select>
              <br />

              <textarea
                className="form-control col-8"
                name="body"
                id="body"
                cols="3"
                placeholder="Enter Post..."
                required />
              <br />

              <button
                type="submit"
                className="btn btn-primary float-md-left">
                Submit Post <MdSend size={25} />
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
