import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostsList from './PostsList';
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
        <PostsList />
      </div>
    );
  }
}

export default connect(null, actions)(App);
