import { PageStatus } from "../../common/typings";
import { REG, REG_ERROR, REG_SUCCESS } from "./actions";

const defaultAuthState = { pageStatus: PageStatus.LOADED };

export const reg = (state = defaultAuthState, action) => {
  switch (action.type) {
    case REG:
      return {
        ...state,
        pageStatus: PageStatus.LOADING
      };
    case REG_ERROR:
      return {
        ...state,
        pageStatus: PageStatus.ERROR,
        error: action.error
      };
    case REG_SUCCESS:
      return {
        ...state,
        pageStatus: PageStatus.LOADED
      };
    default:
      return state;
  }
};
