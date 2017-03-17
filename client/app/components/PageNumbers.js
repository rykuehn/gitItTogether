import React from 'react';

const PageNumbers = (props) => {
  return (
      <p style={styles.text}>
        {props.num}
      </p>
  )
}

const styles = {
  text: {
    fontFamily: 'PT Sans Narrow',
    border: '1px solid green'
  }
}


export default PageNumbers;