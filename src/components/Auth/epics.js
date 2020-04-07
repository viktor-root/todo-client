import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { changeLocation } from "../../common/helpers";
import { LOGIN, loginError, loginSuccess } from "./actions";

const loginEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(LOGIN),
    switchMap(({ login, password }) => {
      return from(deps.authDataProvider.login(login, password)).pipe(
        switchMap(() => {
          return of(loginSuccess(), changeLocation('/', false));
        }),
        catchError(e => {
          return of(loginError(e.response.data));
        })
      );
    })
  );
};

export const authEpics = combineEpics(loginEpic);
