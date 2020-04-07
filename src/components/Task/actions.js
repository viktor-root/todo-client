
export const CHANGE_POST = "CHANGE_POST";


export const changePost = (post, id) => {
  return {
    type: CHANGE_POST,
    post,
    id
  }
}


export const CHANGE_POST_SUCCESS = "CHANGE_POST_SUCCESS";


export const changePostSuccess = (post) => {
  return {
    type: CHANGE_POST_SUCCESS,
    post
  }
}

export const CHANGE_POST_ERROR = "CHANGE_POST_ERROR";


export const changePostError = (error) => {
  return {
    type: CHANGE_POST_ERROR,
    error
  }
}


export const DELETE_POST = "DELETE_POST";

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  }
}

export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";

export const deletePostSuccess = () => {
  return {
    type: DELETE_POST_SUCCESS
  }
}

export const DELETE_POST_ERROR = "DELETE_POST_ERROR";

export const deletPostError = (e) => {
  return {
    type: DELETE_POST_ERROR,
    e
  }
}