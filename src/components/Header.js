import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import MdAdd from 'react-icons/lib/md/add';
import MdHome from 'react-icons/lib/md/home';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Readable</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/"><MdHome size={25} /> Home<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/posts/new/post"><MdAdd size={25}/> Add Post</Link>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header);
