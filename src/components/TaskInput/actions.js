export const ADD_POST = "ADD_POST";


export const addPost = (post) => {
  return{
    type: ADD_POST,
    post
  }
}

export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";

export const addPostSuccess = () => {
  return{
    type: ADD_POST_SUCCESS
  }
}

export const ADD_POST_ERROR = "ADD_POST_ERROR";

export const addPostError = (err) => {
  return {
    type: ADD_POST_ERROR,
    err
  }
}