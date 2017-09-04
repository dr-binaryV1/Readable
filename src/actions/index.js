const apiURL = 'http://localhost:5001';
const headers = {
  headers: {
    Authorization: 'gcvhbf84up5juhbde'
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveCategories = data => ({
  type: RECEIVE_CATEGORIES,
  data
});

export const getPosts = () => dispatch => {
  let allPost = [];

  fetch(`${apiURL}/posts`, headers)
    .then(response => response.json())
    .then((posts) => {
      allPost = posts.map((post) => {
        return fetch(`${apiURL}/posts/${post.id}/comments`, headers)
          .then((res) => { return res.json()})
          .then(comments => {
            post.comments = comments;
            return post;
          })
      })
      
      Promise.all(allPost)
        .then(posts => { 
          dispatch(receivePosts(posts.filter(post => {
            return post.deleted === false})))
        });
    });
};

export const getCategories = () => dispatch => {
  fetch(`${apiURL}/categories`, headers)
    .then(response => response.json())
    .then((data) => dispatch(receiveCategories(data)));
};

export const postVote = (id, option, path) => dispatch => {
  fetch(`${apiURL}/${path}/${id}`, {
    headers: {
      Authorization: 'gcvhbf84up5juhbde',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(option)
  }).then((res) => res.json())
    .then(getPosts()(dispatch));
}

export const postContent = (post, path) => dispatch => {
  fetch(`${apiURL}/${path}`, {
    headers: {
      Authorization: 'gcvhbf84up5juhbde',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(post)
  }).then((res) => res.json())
    .then(getPosts()(dispatch));
}

export const deleteContent = (id, path) => dispatch => {
  fetch(`${apiURL}/${path}/${id}`, {
    headers: {
      Authorization: 'gcvhbf84up5juhbde'
    },
    method: 'DELETE'
  }).then((res) => res.json())
    .then(getPosts()(dispatch));
}

export const updateContent = (id, path, content) => dispatch => {
  fetch(`${apiURL}/${path}/${id}`, {
    headers: {
      Authorization: 'gcvhbf84up5juhbde',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(content)
  }).then((res) => res.json())
    .then(getPosts()(dispatch));
}
