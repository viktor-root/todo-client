import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { ADD_POST, addPostSuccess, addPostError } from "./actions";
import { changeLocation } from "../../common/helpers";

const newPostEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(ADD_POST),
    switchMap(({post}) => {
      return from(deps.postDataProvider.addPost(post)).pipe(
        switchMap(() => {
          return of(addPostSuccess(), window.location.reload());
        }),
        catchError(e => {
          return of(addPostError(e));
        })
      );
    })
  );
};

export const newPostEpics = combineEpics(newPostEpic);
