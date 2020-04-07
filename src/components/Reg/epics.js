import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { changeLocation } from "../../common/helpers";
import { REG, regSuccess, regError } from "./actions";

const regEpic = (action$, store$, deps) => {
  return action$.pipe(
    ofType(REG),
    switchMap(({ login, password }) => {
      return from(deps.regDataProvider.reg(login, password)).pipe(
        switchMap(() => {
          return of(regSuccess(), changeLocation('/', false));
        }),
        catchError(e => {
          return of(regError(e.response.data.error));
        })
      );
    })
  );
};

export const regEpics = combineEpics(regEpic);
