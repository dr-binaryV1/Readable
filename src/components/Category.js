import React from 'react';
import { withRouter } from 'react-router-dom'

function Category(props) {
  const { category } = props;
  const formattedCategory = category.name.charAt(0).toUpperCase() + category.name.slice(1);

  function categoryClicked() {
    props.history.push(`/${props.category.path}`)
  }

  return (
    <div onClick={categoryClicked} className="card" id='card_id'>
      <ul className="list-group list-group-flush">
        <li className="list-group-item clickables text-white bg-primary">{formattedCategory}</li>
      </ul>
    </div>
  );
}

export default withRouter(Category);