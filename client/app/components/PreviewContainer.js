import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { displayIssue } from '../actions/actions_pages';

require('../css/PreviewContainer.css');

const PreviewContainer = (props) => {
  localStorage.setItem(props.issue.id, JSON.stringify({ issue: props.issue }));

  let trimmedString = props.issue.body.substr(0, 140);
  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));

  return (
    <Link
      onClick={() => props.displayIssue(props.current, props.position)}
      to={{
        pathname: 'issueProfile',
        query: { user: props.issue.user.login, IssueID: props.issue.id } }}
      className="preview"
    >
      <div className="previewWrapper">
        <i className="exclamation fa fa-exclamation-circle" aria-hidden="true" />
        <div className="initalInfo">
          <div>
            <div className="title"> {props.issue.title}</div>
            <div className="issue"> #{props.issue.number} opened by {props.issue.user.login} </div>
          </div>
          <div className="previewBody"> {trimmedString}... </div>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.currentPageReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ displayIssue }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewContainer);

