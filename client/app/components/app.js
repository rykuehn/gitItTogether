import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import IssuesList from './IssuesList';
import PageScroll from './PageScroll';
import PreviewContainer from './PreviewContainer';

import { issues, currentPage, displayIssue, hideIssue } from '../actions/actions_pages';

class App extends Component {
  constructor(props) {
    super(props);

  }

  getData() {
    axios.get('https://api.github.com/repos/npm/npm/issues')
         .then(response => {
          this.props.issues(response.data)
         })
  }

  componentDidMount() {
    this.getData();
  }
  
  render () {
    if(this.props.display) {
      return (
        <div>
          <p onClick={this.props.hideIssue}> Go Back </p>
          <PreviewContainer issue={this.props.pages[this.props.current][this.props.currentIssue]}/>
        </div>
      )
    } else if (this.props.totalPages > 0){
      return (
        <div style={styles.body}>
          <h1 onClick={() => this.props.currentPage(0)}> GitItTogether</h1>
          <IssuesList currentPage={this.props.current}/>
          <PageScroll pageNums={this.props.totalPages} />
        </div>
      ) 
    } else {
      return (
        <div> Loading </div>
        )
      
    }
    }
  }


  const mapStateToProps = state => {
    return {
      pages: state.pagesReducer,
      current: state.currentPageReducer,
      totalPages: state.totalPagesReducer,
      currentIssue: state.currentIssueDisplayReducer,
      display: state.displayingReducer,
    }
  }

  const mapDispatchToProps = dispatch => { 
    return bindActionCreators({ issues, currentPage, displayIssue, hideIssue }, dispatch);
  }

  const styles= {
    body: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'space-between',
      alignItems: 'center'
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);