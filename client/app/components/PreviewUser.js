import React from 'react';

const PreviewUser = (props) => {
  return (
    <div style={styles.user}> {props.user.login}</div>
  )
}

const styles = {
  user: {
    fontFamily: 'PT Sans Narrow'
  },
}

export default PreviewUser;