import React from 'react';

const PreviewHeading = (props) => {
  return (
    <div> 
      <div style={styles.title}>{props.issue.title} <span style={styles.number}> {props.issue.number} </span></div>
    </div>
  )
}

const styles = {
  title: {
    fontWeight: 'bold',
    fontFamily: 'PT Sans Narrow'
  },
  number: {
    fontWeight: 'lighter',
  }
}

export default PreviewHeading;