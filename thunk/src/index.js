import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';

import { reducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose


const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
