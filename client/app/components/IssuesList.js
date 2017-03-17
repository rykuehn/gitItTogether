import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PreviewContainer from './PreviewContainer';

class IssuesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var currentPageList = this.props.pages[this.props.current];
    return(
      <div style={styles.container}>
        {currentPageList.map((issue, i) => {
          return <PreviewContainer key={issue.id} issue={issue} position={i}/>
        })}
      </div>
    )
    
  }
}


const mapStateToProps = state => {
  return {
    pages: state.pagesReducer,
    current: state.currentPageReducer,
  }
}

const styles ={
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '130vmin',
    border: '1px solid red',
    justifyContent: 'flex-start',
    alignItems: 'space-around',
    flexDirection: 'column'
  }
}
export default connect(mapStateToProps, null)(IssuesList);