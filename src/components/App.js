import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import PostsList from './PostsList';
import CategoryList from './CategoryList';
import Header from './Header';
import * as actions from '../actions';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getCategories();
  } 
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Route exact path="/" component={PostsList} />
              <Route exact path="/:category" render={({ match }) => {
                const { category } = match.params;
                return <PostsList category={category} />
              }} />
            </div>
            <div className="col-4"><CategoryList /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(App));
