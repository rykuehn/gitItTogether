import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { currentPage } from '../actions/actions_pages';
import PageNumbers from './PageNumbers';

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
    border: '1px solid black',
    height: '10vmin',
    width: '30vmin',
    display: 'flex'
  }
}


export default connect(null, mapDispatchToProps)(PageScroll);