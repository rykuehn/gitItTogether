import React, { Component } from 'react'; 
import PreviewHeading from './PreviewHeading';
import PreviewText from './PreviewText';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Comments from './Comments';


class ProfileDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.pages, this.props.current, this.props.display)
    const issue = this.props.pages[this.props.current][this.props.display];
    return(
      <div>
        <PreviewHeading issue={issue}/>
        <PreviewText text={issue.body}/>
        <div>@<a href={`https://github.com/${issue.user.login}`}>{issue.user.login}</a></div>
        <div> {issue.state} </div>
        {issue.labels.map(label => {
          return <div> {label.name} </div>
        })}
        <img src={issue.user.avatar_url} />
        <Comments url={issue.comments_url} />
    </div>
    ) 
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pagesReducer,
    current: state.currentPageReducer,
    display: state.currentIssueDisplayReducer
  }
}


export default connect(mapStateToProps, null)(ProfileDetails);
