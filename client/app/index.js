import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import ContainerApp from './components/app';
import ContainerIssuesList from './components/IssuesList';
import Heading from './components/heading';
import ContainerProfileDetails from './components/DisplayProfile';

import reducers from './reducers/index';

const store = createStore(reducers);
const history = syncHistoryWithStore(browserHistory, store);

const NotFound = () => <h1>404... This page is not found!</h1>;

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Heading}>
        <IndexRoute component={ContainerApp} />
        <Route path="issuesList" component={ContainerIssuesList} />
        <Route path="issueProfile" component={ContainerProfileDetails} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
  , document.getElementById('app'));
