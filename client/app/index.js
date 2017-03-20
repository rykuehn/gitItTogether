import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/app';
import IssuesList from './components/IssuesList';
import Heading from './components/heading';
import ProfileDetails from './components/DisplayProfile';

import reducers from './reducers/index';

const store = createStore(reducers);
const history = syncHistoryWithStore(browserHistory, store);

const NotFound = () => <h1>404.. This page is not found!</h1>;

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Heading}>
        <IndexRoute component={App} />
        <Route path="issuesList" component={IssuesList} />
        <Route path="issueProfile" component={ProfileDetails} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
