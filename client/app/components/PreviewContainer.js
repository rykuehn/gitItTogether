import React from 'react';
import PreviewUser from './PreviewUser';
import PreviewHeading from './PreviewHeading';
import PreviewText from './PreviewText';

const PreviewContainer = (props) => {
   return(
      <div style={styles.container}>
        <PreviewHeading issue={props.issue}/>
        <PreviewText text={props.issue.body}/>
        <PreviewUser user={props.issue.user}/>
    </div>
    ) 
}

const styles = {
  container: {
    border: '1px solid blue',
    justifyContent: 'center',
    margin: '1vmin',
    flexGrow: 1,
  }
}
export default PreviewContainer;