import React, { Component } from 'react';

class Heading extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div>
        <div style={styles.heading}> 
          <h1> Issues </h1>
        </div>
        {this.props.children}
      </div>
    )
  }
 
};

var styles = {
  heading: {
    width: '100%',
    height: '20vh',
    backgroundColor: '#F6BD60',
    fontFamily: 'Work Sans'

  }
}

export default Heading;