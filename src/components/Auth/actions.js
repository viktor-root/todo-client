export const LOGIN = "LOGIN";

export const login = (login, password) => {
  return {
    type: LOGIN,
    password,
    login
  };
};

export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  };
};

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
};
