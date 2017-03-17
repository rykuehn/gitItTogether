import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import IssuesList from './IssuesList';
import PageScroll from './PageScroll';

import { issues, currentPage } from '../actions/actions_pages';

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
      return (
        <div style={styles.body}>
          <h1 onClick={() => this.props.currentPage(0)}> GitItTogether</h1>
          <PageScroll pageNums={this.props.totalPages} />
        </div>
      ) 
    }
  }


  const mapStateToProps = state => {
    return {
      pages: state.pagesReducer,
      current: state.currentPageReducer,
      totalPages: state.totalPagesReducer,
    }
  }

  const mapDispatchToProps = dispatch => { 
    return bindActionCreators({ issues, currentPage }, dispatch);
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