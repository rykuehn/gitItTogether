import React from 'react';
import PageNumber from './PageNumbers';

const PageScroll = (props) => {
  const Pages = Math.ceil(props.numbers / 25);

  return (
      <div style={styles.container}>
        {() => create()}
      </div>
  )
}

const styles = {
  container: {
    border: '1px solid black',
    height: '10vmin',
    width: '30vmin',
    display: 'flex'
  }
}


export default PageScroll;