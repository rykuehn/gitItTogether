import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import AwesomeComponent from './awesome';

class App extends Component {
  componentWillMount() {
    axios.get('https://api.github.com/repos/npm/npm/issues')
         .then(response => {
          console.log(response.length)
         })
  }
  
  render () {
    return <AwesomeComponent />;
  }
}

render(<App/>, document.getElementById('app'));