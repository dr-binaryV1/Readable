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

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const getPosts = () => dispatch => {
  fetch(`${apiURL}/posts`, headers)
    .then(response => response.json()).then((posts) => {
      posts.map((post) => {
        return fetch(`${apiURL}/posts/${post.id}/comments`, headers)
          .then((res) => res.json())
          .then(comments => {
            post.comments = comments;
          }).then(() => dispatch(receivePosts(posts)))
      })
    });
};

export const getCategories = () => dispatch => {
  fetch(`${apiURL}/categories`, headers)
    .then(response => response.json()).then((data) => dispatch(receiveCategories(data)));
};

export const getComments = (posts) => {
  // TODO: figure this out
}