import React, {Component} from 'react';
import data from './mock.js';

class AwesomeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    console.log(data.data.length)
    return (
      <ul>
       {data.data.map(entry => {
        return <li> {entry.url}</li>
       })}
      </ul>
    );
  }

}

export default AwesomeComponent;