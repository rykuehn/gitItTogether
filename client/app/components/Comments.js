import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {
  constructor(props){
    super(props);

    this.state = {
      comments: []
    }
  }

  getComments(url){
    axios.get(url)
          .then(response => {
            this.setState({comments: response.data})
          })
  }

  componentDidMount() {
    this.getComments(this.props.url)
  }

  render() {
    if(this.state.comments.length > 0){
      return (
      <div>
        {this.state.comments.map((comment, i) => {
          return <p key={i}> {comment.body} </p>
        })}
      </div>
      )
    } else{
      return (
        <p> No Comments </p>
      ) 
    } 
  }

}

export default Comments;