import {
  RECEIVE_POSTS,
  RECIEVE_CATEGORIES
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