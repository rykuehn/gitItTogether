import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PreviewContainer from './PreviewContainer';
import PageScroll from './PageScroll';

class IssuesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pages, selectedPage, pageNums } = this.props;
    var currentPageList = pages[selectedPage];

    return(
      <div style={styles.container}>
        <div style={styles.previewContainer}>
          {currentPageList.map((issue, i) => {
            return <PreviewContainer key={issue.id} issue={issue} position={i}/>
          })}
        </div>
        <div>
         <PageScroll style={styles.pageScroll} pageNums={pageNums} />
        </div>
      </div>
    )
    
  }
}


const mapStateToProps = state => {
  return {
    pages: state.pagesReducer,
    selectedPage: state.currentPageReducer,
    pageNums: state.totalPagesReducer
  }
}

const styles ={
  container: {
    display: 'flex',
    backgroundColor: '#F7EDE2',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  previewContainer: {
    backgroundColor: 'white',
    borderRadius: '1px',
    width: '75vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  pageScroll: {
    justifyContent: 'center',
    alignItems: 'center',
  }
}
export default connect(mapStateToProps, null)(IssuesList);