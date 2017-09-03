import { combineReducers } from 'redux';
import postData from './postsReducer';
import categoryData from './categoryReducer';

export default combineReducers({
  postData,
  categoryData
});