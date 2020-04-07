import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { LOAD_POSTS, loadPostsSuccess, loadPostsError, LOAD_POSTS_BY_TITLE, loadPostsByTitleSuccess, loadPostsByTitleError } from "./actions";

const loadPostsEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(LOAD_POSTS),
    switchMap(({}) => {
      return from(deps.mainDataProvider.loadPosts()).pipe(
        switchMap((data) => {
          return of(loadPostsSuccess(data));
        }),
        catchError(e => {
          return of(loadPostsError(e));
        })
      );
    }),
  );
};


export const mainEpics = combineEpics(loadPostsEpic);
