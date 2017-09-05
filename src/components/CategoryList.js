import React from 'react';
import { connect } from 'react-redux';

import Category from './Category';

function CategoryList(props) {
    const { categories } = props;

  return (
    <div>
      <div>
        <h5>Categories</h5>
        <hr />
        {categories ? categories.map((category) =>
          <Category key={category.name} category={category} />) : ''}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    categories: state.categoryData.categories
  }
}

export default connect(mapStateToProps)(CategoryList);
