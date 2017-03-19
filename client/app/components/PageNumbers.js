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
    margin: '1vw',
    fontFamily: 'Work Sans',
    fontWeight: 'bold'
  }
}


export default PageNumbers;