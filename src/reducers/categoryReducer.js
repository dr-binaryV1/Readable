import { RECEIVE_CATEGORIES } from '../actions';

export default function(state={}, action) {
  const { data } = action;
  let categories;
  data ? categories = data.categories : categories = undefined;

  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return {...state, categories};

    default:
      return state;
  }
}