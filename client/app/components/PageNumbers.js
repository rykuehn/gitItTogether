import React from 'react';

const PageNumbers = (props) => {
  return (
      <p onClick={() => props.click(props.num)} style={styles.text}>
        {props.num}
      </p>
  )
}

const styles = {
  text: {
    fontFamily: 'PT Sans Narrow',
  }
}


export default PageNumbers;