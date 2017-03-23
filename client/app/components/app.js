import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import axios from 'axios';

import IssuesListContainer from './IssuesList';
import { issues } from '../actions/actions_pages';

require('../css/App.css');

export class App extends Component {

  componentWillMount() {
    axios.get('https://api.github.com/repos/npm/npm/issues')
         .then((response) => {
           this.props.issues(response.data);
           browserHistory.push('issuesList');
         });
  }
  render() {
    return (
      <div className="body">
        {this.props.totalPages >= 1 ? <IssuesListContainer /> : ''}
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    totalPages: state.totalPagesReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ issues }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
