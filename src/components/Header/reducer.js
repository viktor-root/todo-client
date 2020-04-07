import { PageStatus } from "../../common/typings";
import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from './actions';

const defaultAuthState = { pageStatus: PageStatus.LOADING };

export const header = (state = defaultAuthState, action) => {
  switch (action.type) {
    case LOAD_USER: 
      return {
        ...state,
        pageStatus: PageStatus.LOADING,
      }
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED,
        user: action.user
      }
    case LOAD_USER_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR,
        error: action.error
      }
    default:
      return state;
  }
};
