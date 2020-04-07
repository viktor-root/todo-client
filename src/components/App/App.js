import React from 'react';
import Task from '../Task/Task';
import TaskInput from '../TaskInput/TaskInput';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import { Main } from '../Main/Main';
import { Header } from '../Header/Header';
import { About } from '../About/About'
import './index.css';
import { middleware,routesMiddleware, reducer as router, enhancer } from './router';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware
} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import {
  initializeCurrentLocation,
  State as RouterState,
  Fragment,
  RouterActions,
  Link,
} from "redux-little-router";
import {
  combineEpics,
  createEpicMiddleware,
  Epic,
  EpicMiddleware
} from "redux-observable";
import { AuthDataProvider } from '../../api/AuthDataProvider';


import { AuthContainer } from '../Auth/AuthContainer';
import { authEpics } from '../Auth/epics';
import { auth } from '../Auth/reducer';
import { host } from '../../common/host';

import {RegContainer} from '../Reg/RegContainer';
import { reg } from '../Reg/reducer';
import { regEpics } from '../Reg/epics';
import { RegDataProvider } from '../../api/RegDataProvider';

import { MainContainer } from '../Main/MainContainer';
import { mainEpics } from '../Main/epics';
import { main } from '../Main/reducer';
import { MainDataProvider } from '../../api/MainDataProvider';

import { newPostEpics } from '../TaskInput/epics';
import { newPost } from '../TaskInput/reducer';
import { PostDataProvider } from '../../api/PostDataProvider';
import { HeaderContainer } from '../Header/HeaderContainer';
import { header } from '../Header/reducer';
import { headerEpics } from '../Header/epics';
import { UserDataProvider } from '../../api/UserDataProvider';
import { postEpics } from '../Task/epics';
import { post } from '../Task/reducer';


const createMiddleware = (
  epicMiddleware
) => applyMiddleware(middleware, epicMiddleware, routesMiddleware);

export const App = () => {
  const history = createBrowserHistory();
  const composeEnhancers = composeWithDevTools({ serialize: true });
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      authDataProvider: new AuthDataProvider(host),
      regDataProvider: new RegDataProvider(host),
      mainDataProvider: new MainDataProvider(host),
      postDataProvider: new PostDataProvider(host),
      userDataProvider: new UserDataProvider(host),
      postDataProvider: new PostDataProvider(host),
    }
  });

  const store = createStore(
    combineReducers({ router, auth, reg, main, newPost, header, post }),
    composeEnhancers(enhancer, createMiddleware(epicMiddleware))
  );
  epicMiddleware.run(combineEpics(authEpics, regEpics, mainEpics, newPostEpics, headerEpics, postEpics));

  const initialState = store.getState();

  if (initialState && initialState.router) {
    store.dispatch(initializeCurrentLocation(initialState.router));
  }
  return(
    <Provider store={store}>
      <Router history={history}>
        <Fragment forRoute="/">
          <>
          <Fragment forRoute="/auth">
            <AuthContainer />
          </Fragment>
          <Fragment forRoute="/reg">
            <RegContainer />
          </Fragment>
          <Fragment forRoute="/about">
            <About />
          </Fragment>
          <Fragment forRoute="/">
            <>
            <HeaderContainer />
            <MainContainer/>
            </>
          </Fragment>
          </>
        </Fragment>
      </Router>
    </Provider>
  )
}
export default App;
