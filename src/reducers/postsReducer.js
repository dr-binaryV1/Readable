import {
  RECEIVE_POSTS,
  RECIEVE_CATEGORIES
} from '../actions';

export default function posts(state={}, action) {
  const { posts, data } = action;
  let categories;
  data ? categories = data.categories : categories = undefined;

  switch(action.type) {
    case RECEIVE_POSTS:
      return {...state, posts}
     
    case RECIEVE_CATEGORIES:
      return {...state, categories};

    default:
      return state;
  }
}