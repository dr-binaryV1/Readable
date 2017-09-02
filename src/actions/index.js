const apiURL = 'http://localhost:5001';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECIEVE_CATEGORIES = 'RECEIVE_CATEGORIES';


export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveCategories = data => ({
  type: RECIEVE_CATEGORIES,
  data
});

export const getPosts = () => dispatch => {
  fetch(`${apiURL}/posts`, {
    headers: {
      Authorization: 'gcvhbf84up5juhbde'
    }
  }).then(response => response.json()).then((posts) => dispatch(receivePosts(posts)));
};

export const getCategories = () => dispatch => {
  fetch(`${apiURL}/categories`, {
    headers: {
      Authorization: 'gcvhbf84up5juhbde'
    }
  }).then(response => response.json()).then((data) => dispatch(receiveCategories(data)));
};