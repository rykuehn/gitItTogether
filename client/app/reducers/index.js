import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { pagesReducer, currentPageReducer, totalPagesReducer, currentIssueDisplayReducer } from './reducer_pages';

const rootReducer = combineReducers({
  pagesReducer,
  currentPageReducer,
  totalPagesReducer,
  currentIssueDisplayReducer,
  routing: routerReducer,
});

export default rootReducer;
