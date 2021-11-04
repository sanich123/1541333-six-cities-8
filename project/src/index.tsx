import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../src/store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import StartUp from './components/start-up/start-up';
import { requireAuthorization } from './store/action';
import { AuthorizationStatus } from './const';
import { createApi } from './services/api';
import { applyMiddleware } from '@reduxjs/toolkit';
import { ThunkAppDispatch } from './types/reducer';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <StartUp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

