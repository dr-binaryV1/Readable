import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound(props) {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-3">404 Page Not Found!</h1>
        <p className="lead">Post requested has been deleted.</p>
        <hr className="my-4" />
        <p>Click the button below to be taken back to the homepage.</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/">Go Home</Link>
        </p>
      </div>
    </div>
  )
}