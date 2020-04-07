
export const LOAD_USER = "LOAD_USER";

export const loadUser = () => {
  return {
    type: LOAD_USER
  }
}

export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";

export const loadUserSuccess = (user_data) => {
  return {
    type: LOAD_USER_SUCCESS,
    user: user_data
  }
}


export const LOAD_USER_ERROR = "LOAD_USER_ERROR";

export const loadUserError = (error) => {
  return {
    type: LOAD_USER_ERROR,
    error
  }
}