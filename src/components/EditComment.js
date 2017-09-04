import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

import MdCreate from 'react-icons/lib/md/create';
import MdCancel from 'react-icons/lib/md/cancel';

function EditComment(props) {
    function onUpdateComment() {
      const body = document.getElementById(`body-${comment.id}`).value;
      const timestamp = new Date().getTime();

      const data = {
        body,
        timestamp
      }

      props.updateContent(comment.id, 'comments', data);
    }

    const { comment } = props;

    return (
        <div className="card border-light mb-3 text-left">
          <div className="card-header">Edit Comment</div>
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <textarea
                  name="body"
                  defaultValue={comment.body}
                  id={`body-${comment.id}`}
                  className="form-control col-8"
                  rows="3"  />
                <br />

                <button
                  onClick={() => onUpdateComment()}
                  className="btn btn-primary"><MdCreate /> Update Comment</button>
                <button
                  onClick={() => document.getElementById(comment.id).style.display="none"}
                  className="btn btn-danger"><MdCancel /> Cancel</button>
              </form>
            </div>
        </div>
    )
}

export default connect(null, actions)(EditComment);
