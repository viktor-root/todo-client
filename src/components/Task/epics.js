import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { changeLocation } from "../../common/helpers";
import { CHANGE_POST, changePostSuccess, changePostError, DELETE_POST, deletePostSuccess, deletPostError } from "./actions";


const changePostEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(CHANGE_POST),
    switchMap(({post, id}) => {
      return from(deps.postDataProvider.changePost(post, id)).pipe(
        switchMap((data) => {
          return of(changePostSuccess(data), window.location.reload());
        }),
        catchError(e => {
          return of(changePostError(e));
        })
      )
    })
  )
}

const deletePostEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(DELETE_POST),
    switchMap(({id}) => {
      return from(deps.postDataProvider.deletePost(id)).pipe(
        switchMap(() => {
          return of(deletePostSuccess(), window.location.reload());
        }),
        catchError(e => {
          return of(deletPostError(e));
        })
      )
    })
  )
}

export const postEpics = combineEpics(changePostEpic, deletePostEpic);
