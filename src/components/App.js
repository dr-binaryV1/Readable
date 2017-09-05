import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import PostsList from './PostsList';
import CategoryList from './CategoryList';
import PostDetail from './PostDetail';
import Header from './Header';
import AddPost from './AddPost';
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
        <br />
        <div className="container">
          <div className="row">
            <div className="col-10">
              <Route exact path="/" component={PostsList} />
              <Route exact path="/:category" render={({ match }) => {
                const { category } = match.params;
                return <PostsList category={category} />
              }} />
              <Route exact path="/:category/:id" render={({ match }) => {
                const { id } = match.params;
                return <PostDetail postId={id} />
              }} />
              <Route exact path="/posts/new/post" component={AddPost} />
            </div>
            <div className="col-2"><CategoryList /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(App));
