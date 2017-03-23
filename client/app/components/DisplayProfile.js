import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';

require('../css/DisplayProfile.css');
require('../css/App.css');

export class ProfileDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: null,
    };
  }

  componentWillMount() {
    // when compenent mounts, grab the ID of the preview displayed from the query.
    const ID = window.location.href.split('?')[1].split('&')[0].split('=')[1];
   
    // grab the information about the specific ID clicked. The information in state
    // is held as a back up in case hte page is refreshed and it loses access to the store.
    this.setState({ display: JSON.parse(localStorage.getItem(ID)) });
  }

  render() {
    const { total, current, display, pages } = this.props;
    const issue = total >= 1 ? pages[current][display] : this.state.display.issue;

    return (
      <div className="ProfileWrapper">
        <div className="displayProfileContainer">
          <div className="userImage"><img alt="user_avatar" src={issue.user.avatar_url} /></div>
          <div className="information">
            <div className="display" id={issue.state === 'open' ? 'open' : 'closed'}>
              <div className="display title"> {issue.title} </div>
              <div className="display meta"> #{issue.id}
                <span> opened by <a href={`https://github.com/${issue.user.login}`}>@{issue.user.login}</a></span>
              </div>
            </div>
            <div className="text">{issue.body} </div>
            <div className="text labels">
              Labels
            </div>
            <div className="labelsDiv">
              {issue.labels.map((label, i) => {
                return <span className="text" key={i}> {label.name} </span>;
              })}
            </div>
            <div className="text labels"> Comments </div>
            <Comments url={issue.comments_url} />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    pages: state.pagesReducer,
    current: state.currentPageReducer,
    display: state.currentIssueDisplayReducer,
    total: state.totalPagesReducer,
  };
};

export default connect(mapStateToProps, null)(ProfileDetails);
