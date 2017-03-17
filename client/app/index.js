import React, {Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers/index';

let store = createStore(reducers);

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app'));