import { combineReducers } from 'redux';
import  { pagesReducer, currentPageReducer, totalPagesReducer, displayingReducer, currentIssueDisplayReducer} from './reducer_pages';

const rootReducer = combineReducers({
  pagesReducer,
  currentPageReducer,
  totalPagesReducer,
  displayingReducer,
  currentIssueDisplayReducer
});

export default rootReducer;