import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import axios from 'axios';

import IssuesList from './IssuesList';
import { issues } from '../actions/actions_pages';

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7EDE2',
    width: '100%',
    margin: '0px',
  },
};

class App extends Component {

  componentWillMount() {
    axios.get('https://api.github.com/repos/npm/npm/issues')
         .then((response) => {
           this.props.issues(response.data);
           browserHistory.push('issuesList');
         });
  }
  render() {
    return (
      <div style={styles.body}>
        {this.props.totalPages >= 1 ? <IssuesList /> : ''}
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
