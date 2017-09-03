import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';

class Vote extends Component {
  onVote(option) {
    this.props.postVote(this.props.post.id, { option });
  }

  render() {
    const { post } = this.props;

    return (
      <div className='card col-2 text-center float-md-right'>
        <div>
          <div className='clickables' onClick={() => this.onVote('upVote')}><FaArrowUp /></div>
        </div>
        <div>
          <div>{post.voteScore}</div>
        </div>
        <div>
          <div className='clickables' onClick={() => this.onVote('downVote')}><FaArrowDown /></div>
        </div>
      </div>
    )
  }
}


export default connect(null, actions)(Vote);