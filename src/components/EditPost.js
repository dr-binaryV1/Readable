import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

function EditPost(props) {
    function onUpdatePost() {
      const title = document.getElementById(`title-${post.id}`).value;
      const body = document.getElementById(`body-${post.id}`).value;
      
      const data = {
        title,
        body
      }

      props.updateContent(post.id, 'posts', data);
    }

    const { post } = props;

    return (
        <div className="card border-light mb-3 text-left">
          <div className="card-header">Edit Post</div>
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  name="title"
                  id={`title-${post.id}`}
                  className="form-control col-4"
                  type="text"
                  defaultValue={post.title}
                  required />
                <br />

                <textarea
                  name="body"
                  defaultValue={post.body}
                  id={`body-${post.id}`}
                  className="form-control col-8" 
                  rows="3"  />
                <br />
                
                <button 
                  onClick={() => onUpdatePost()}
                  className="btn btn-primary">Update Post</button>
                <button
                  onClick={() => document.getElementById(post.id).style.display="none"} 
                  className="btn btn-danger">Cancel</button>
              </form>
            </div>
        </div>
    )
}

export default connect(null, actions)(EditPost);
