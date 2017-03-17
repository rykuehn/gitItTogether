import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import PreviewUser from './PreviewUser';
import PreviewHeading from './PreviewHeading';
import PreviewText from './PreviewText';
import { displayIssue } from '../actions/actions_pages';

const PreviewContainer = (props) => {
  if(props.display){
     return(
      <div style={styles.container}>
        <PreviewHeading issue={props.issue}/>
        <PreviewText text={props.issue.body}/>
        <PreviewUser user={props.issue.user}/>
    </div>
    ) 
   } else{
    return(
      <div onClick={() => props.displayIssue(props.current, props.position)} style={styles.container}>
        <PreviewHeading issue={props.issue}/>
        <PreviewText text={props.issue.body}/>
        <PreviewUser user={props.issue.user}/>
    </div>
    ) 
   }
  
}

const mapStateToProps = state => {
  return {
    current: state.currentPageReducer,
    display: state.displayingReducer
  }
}

const mapDispatchToProps = dispatch => { 
  return bindActionCreators({ displayIssue }, dispatch);
}

const styles = {
  container: {
    border: '1px solid blue',
    justifyContent: 'center',
    margin: '1vmin',
    flexGrow: 1,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PreviewContainer);