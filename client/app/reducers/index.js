import { combineReducers } from 'redux';
import  { pagesReducer, currentPageReducer, totalPagesReducer } from './reducer_pages';

const rootReducer = combineReducers({
  pagesReducer,
  currentPageReducer,
  totalPagesReducer
});

export default rootReducer;