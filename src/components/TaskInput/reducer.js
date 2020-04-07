import { PageStatus } from "../../common/typings";
import { ADD_POST, ADD_POST_SUCCESS, ADD_POST_ERROR } from "./actions";

const defaultAuthState = { pageStatus: PageStatus.LOADED };

export const newPost = (state = defaultAuthState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        pageStatus: PageStatus.LOADING,
        post: action.post
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED
      };
    case ADD_POST_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR,
        error: action.error
      };
    default:
      return state;
  }
};
