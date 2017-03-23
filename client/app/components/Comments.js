import React, { Component } from 'react';
import axios from 'axios';

require('../css/App.css');

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.getComments(this.props.url);
  }

  // fetch comments specific to the issue clicked
  getComments(url) {
    axios.get(url)
          .then((response) => {
            this.setState({ comments: response.data });
          });
  }

  render() {
    if (this.state.comments.length > 0) {
      return (
        <div>
          {this.state.comments.map((comment, i) => {
            return (
              <p className="text" key={i}>
                <span><a href={`https://github.com/${comment.user.login}`}>@{comment.user.login}: </a></span>
                {comment.body}
              </p>
            )
          })}
        </div>
      );
    } else {
      return <p className="text"> No Comments </p>;
    }
  }

}

export default Comments;
