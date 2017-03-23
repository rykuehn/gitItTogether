import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { currentPage } from '../actions/actions_pages';
//import PageNumbers from './PageNumbers';

const PageNumbers = (props) => {
  return (
      <p onClick={() => props.click(props.num)} style={styles.text}>
        {props.num}
      </p>
  )
}

// const styles = {
//   text: {
//     fontFamily: 'PT Sans Narrow',
//     margin: '1vw',
//     fontFamily: 'Work Sans',
//     fontWeight: 'bold'
//   }
// }


const PageScroll = (props) => {
  var amount = _.range(1, props.pageNums + 1);
  return (
      <div style={styles.container}>
        {amount.map(number => {
          return <PageNumbers click={props.currentPage} key={number} num={number} />
        })}
      </div>
  )
}


const mapDispatchToProps = dispatch => { 
  return bindActionCreators({ currentPage }, dispatch);
}

const styles = {
  container: {
    height: '10vmin',
    width: '30vmin',
    display: 'flex',
    justifyContent: 'space-around'
  }
}


export default connect(null, mapDispatchToProps)(PageScroll);