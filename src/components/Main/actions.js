export const LOAD_POSTS = "LOAD_POSTS";

export const loadPosts = () => {
  return {
    type: LOAD_POSTS
  }
}

export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";

export const loadPostsSuccess = (posts) => {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts
  }
} 


export const LOAD_POSTS_ERROR = "LOAD_POSTS_ERROR";

export const loadPostsError = (error) => {
  return {
    type: LOAD_POSTS_ERROR,
    error
  }
}
