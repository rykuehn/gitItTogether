import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';


export class ProfileDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: null,
    };
  }

  componentWillMount() {
    const ID = window.location.href.split('?')[1].split('&')[0].split('=')[1];
    this.setState({ display: JSON.parse(localStorage.getItem(ID)) });
  }

  render() {
    const { total, current, display, pages } = this.props;
    const issue = total >= 1 ? pages[current][display] : this.state.display.issue;

    return (
      <div style={styles.container}>
        <div>
          <div> {issue.title} </div>
          <div> {issue.id} </div>
          <div> {issue.state} </div>
        </div>
        <div style={styles.body}>{issue.body} </div>
        <div>@<a href={`https://github.com/${issue.user.login}`}>{issue.user.login}</a></div>
        <div className="labels">
          {issue.labels.map((label, i) => {
            return <div key={i}> {label.name} </div>;
          })}
        </div>
        <img alt="user avatar" style={styles.image} src={issue.user.avatar_url} />
        <Comments url={issue.comments_url} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    pages: state.pagesReducer,
    current: state.currentPageReducer,
    display: state.currentIssueDisplayReducer,
    total: state.totalPagesReducer,
  };
};

const styles = {
  container: {
    display: 'flex',
    width: '70vw',
    border: '1px solid blue',
    flexDirection: 'column',
    alignItems: 'center',
  },
  body: {
    border: '1px solid green',
  },
  image: {
    width: '10vmin',
    height: '10vmin',
  },
};


export default connect(mapStateToProps, null)(ProfileDetails);
