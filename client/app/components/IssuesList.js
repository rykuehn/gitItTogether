import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PreviewContainer from './PreviewContainer';
import PageScroll from './PageScroll';
import { issues } from '../actions/actions_pages';

require('../css/IssuesList.css');

export class IssuesList extends Component {

  componentWillMount() {
    // items were stored in local storage to achieve data persistence when page refreshes.
    const retrieved = localStorage.getItem('issues');
    this.props.issues(JSON.parse(retrieved));
  }

  render() {
    const { pages, selectedPage, pageNums } = this.props;
    const currentPageList = pages[selectedPage];

    return (
      <div className="container">
        <div className="previewContainer">
          {currentPageList.map((issue, i) => {
            return <PreviewContainer key={issue.id} issue={issue} position={i} />;
          })}
        </div>
        <div>
          <PageScroll className="pageScroll" pageNums={pageNums} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    pages: state.pagesReducer,
    selectedPage: state.currentPageReducer,
    pageNums: state.totalPagesReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ issues }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
