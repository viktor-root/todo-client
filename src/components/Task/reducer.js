import { PageStatus } from "../../common/typings";
import { CHANGE_POST, CHANGE_POST_SUCCESS, CHANGE_POST_ERROR, DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_ERROR } from "./actions";

const defaultAuthState = { pageStatus: PageStatus.LOADED };

export const post = (state = defaultAuthState, action) => {
  switch (action.type) {
    case CHANGE_POST:
      return {
        ...state,
        pageStatus: PageStatus.LOADING
      }
    case CHANGE_POST_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED,
        post: action.post
      }
    case CHANGE_POST_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR,
        error: action.error
      }
    case DELETE_POST:
      return {
        ...state,
        pageStatus: PageStatus.LOADING
      }
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED,
      }
    case DELETE_POST_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR
      }
    default:
      return state;
  }
};
