import React from 'react';

const PreviewText = (props) => {
  var trimmedString = props.text.substr(0, 140);

//re-trim if we are in the middle of a word
  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
  return (
      <p style={styles.text}>
        {trimmedString}...
      </p>
  )
}

const styles = {
  text: {
    fontFamily: 'PT Sans Narrow'
  }
}


export default PreviewText;