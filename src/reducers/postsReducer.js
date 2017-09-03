import {
  RECEIVE_POSTS
} from '../actions';

export default function posts(state={}, action) {
  const { posts } = action;

  switch(action.type) {
    case RECEIVE_POSTS:
      return {...state, posts}

    default:
      return state;
  }
}