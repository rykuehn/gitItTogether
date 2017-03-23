import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { currentPage } from '../actions/actions_pages';

require('../css/App.css');

const PageNumbers = (props) => {
  return (
    <div onClick={() => props.click(props.num)} className="text number">
      {props.num}
    </div>
  );
};

const PageScroll = (props) => {
  const amount = _.range(1, props.pageNums + 1);
  return (
    <div className="pageScroll">
      {amount.map((number) => {
        return <PageNumbers click={props.currentPage} key={number} num={number} />;
      })}
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ currentPage }, dispatch);

export default connect(null, mapDispatchToProps)(PageScroll);
