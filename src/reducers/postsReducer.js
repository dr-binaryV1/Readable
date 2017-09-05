import {
  RECEIVE_POSTS,
  SORT_POSTS
} from '../actions';

export default function posts(state={}, action) {
  const { posts, method } = action;

  switch(action.type) {
    case RECEIVE_POSTS:
      return {...state, posts}

    case SORT_POSTS:
      return {...state, posts, sortBy: method}

    default:
      return state;
  }
}
