import { combineReducers } from 'redux';
import { pages, currentPage } from './reducer_pages';

const rootReducer = combineReducers({
  pages,
  currentPage
});

export default rootReducer;