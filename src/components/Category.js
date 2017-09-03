import React from 'react';
import { withRouter } from 'react-router-dom'

function Category(props) {
  function categoryClicked() {
    props.history.push(`/${props.category.path}`)
  }

  return (
    <div onClick={categoryClicked} className="card" id='card_id'>
      <ul className="list-group list-group-flush">
        <li className="list-group-item clickables">{props.category.name}</li>
      </ul>
    </div>
  );
}

export default withRouter(Category);