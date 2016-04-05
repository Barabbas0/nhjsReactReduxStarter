import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes';

// If running with Redux Dev Tools, let them wrap the store
const createStore2 = window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore;

const createStoreWithMiddleware = applyMiddleware()(createStore2);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} >

    </Router>
  </Provider>
  , document.querySelector('.container'));
