import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PreviewContainer from './PreviewContainer';
import PageScroll from './PageScroll';

import { issues } from '../actions/actions_pages';

class IssuesList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const retrieved = localStorage.getItem('issues');
    this.props.issues(JSON.parse(retrieved));
  }

  render() {
    const { pages, selectedPage, pageNums } = this.props;
    const currentPageList = pages[selectedPage];

    return (
      <div style={styles.container}>
        <div style={styles.previewContainer}>
          {currentPageList.map((issue, i) => {
            return <PreviewContainer key={issue.id} issue={issue} position={i} />;
          })}
        </div>
        <div>
          <PageScroll style={styles.pageScroll} pageNums={pageNums} />
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

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#F7EDE2',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  previewContainer: {
    backgroundColor: 'white',
    borderRadius: '1px',
    width: '75vw',
    display: 'flex',
    flexDirection: 'column',
  },
  pageScroll: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
