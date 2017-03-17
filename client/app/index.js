import React, {Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import axios from 'axios';

import reducers from './reducers/index';
import IssuesList from './components/IssuesList';
import PageScroll from './components/PageScroll';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pages, currentPage } from './actions/actions_pages';

let store = createStore(reducers);

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      data: null,
      offset: 0,
      pageCount: 0
    }

  }

  getData() {
    axios.get('https://api.github.com/repos/npm/npm/issues')
         .then(response => {
          this.setState({data: response.data, pageCount: Math.ceil(response.data.length / 25)});
         })
  }

  componentDidMount() {
    this.getData();
  }

  handlePageClick(data){
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({offset: offset}, () => {
      this.getData();
    });
  };
  
  render () {
    
    if(this.state.data !== null) {
      console.log('this', this.state)
      return (
        <div style={styles.body}>
          <h1> GitItTogether</h1>
          <IssuesList issues={this.state.data} />
        </div>
      ) 
    } else {
      return (
        <p> Hello </p>
      )
    }
    
    
    }
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

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app'));