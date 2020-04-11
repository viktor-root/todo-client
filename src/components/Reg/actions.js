export const REG = "REG";

export const reg = (login, password,name) => {
  return {
    type: REG,
    login,
    password,
    name
  }
}

export const REG_SUCCESS = "REG_SUCCESS";

export const regSuccess = () => {
  return {
    type: REG_SUCCESS,
  }
}

export const REG_ERROR = "REG_ERROR";

export const regError = (error) => {
  return {
    type: REG_ERROR,
    error
  }
}