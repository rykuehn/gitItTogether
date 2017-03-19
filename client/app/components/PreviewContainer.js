import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { browserHistory, Link } from 'react-router';


import PreviewUser from './PreviewUser';
import PreviewHeading from './PreviewHeading';
import PreviewText from './PreviewText';
import Comments from './Comments';
import { displayIssue } from '../actions/actions_pages';

const PreviewContainer = (props) => {
return (
    <Link 
    onClick={() => props.displayIssue(props.current, props.position)} style={styles.container}
    to={{ 
    pathname: 'issueProfile', 
    query: { user: props.issue.user.login, IssueID: props.issue.id }}}>
        <PreviewHeading issue={props.issue}/>
        <PreviewText text={props.issue.body}/>
        <PreviewUser user={props.issue.user}/>
    </Link>
  ) 
}

const mapStateToProps = state => {
  return {
    current: state.currentPageReducer,
    display: state.displayingReducer
  }
}

const mapDispatchToProps = dispatch => { 
  return bindActionCreators({ displayIssue }, dispatch);
}

const styles = {
  container: {
    border: '1px solid #D7D9DC',
    borderTop: '0px',
    justifyContent: 'center',
    flexGrow: 1,
    padding: '3vmin',
    textDecoration: 'none',
    color: 'black'
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PreviewContainer);


