import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import axios from 'axios';

import IssuesList from './IssuesList';
import PreviewContainer from './PreviewContainer';
import Heading from './heading';

import { issues, currentPage, displayIssue, hideIssue } from '../actions/actions_pages';

class App extends Component {

  componentWillMount() {
    axios.get('https://api.github.com/repos/npm/npm/issues')
         .then(response => {
          this.props.issues(response.data);
         })
  }

  getIssues() {
    browserHistory.push('issuesList');
  }
  
  render () {
    return (
      <div style={styles.body}>
        <div onClick={this.getIssues} style={styles.issuesButton}> click to load issues </div>
        <div> 
          {this.props.children}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    totalPages: state.totalPagesReducer,
  }
}

const mapDispatchToProps = dispatch => { 
  return bindActionCreators({ issues }, dispatch);
}

const styles= {
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7EDE2',
    height: '100%',
    width: '100%'
  },
  issuesButton: {
    border: '1px solid gray',
    borderRadius: '2px',
    padding: '10px',
    fontFamily: 'Work Sans'

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);