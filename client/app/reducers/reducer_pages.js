import _ from 'underscore';
import { CREATE_ISSUES_LIST, GET_CURRENT_PAGE, DISPLAY_ISSUE, HIDE_ISSUE } from '../actions/actions_pages';

export function pagesReducer(pages = {}, action){
  const pageCopy = _.extend({}, pages)
  
  switch(action.type) {
    case CREATE_ISSUES_LIST:
      //create a key with the page number with the value being
      //all the issues associated with that page.
      for(var i = 1; i<= action.payload.numOfPages; i++){
        pageCopy[i] = action.payload.data.splice(0, 25);
      }
      return pageCopy;
    default:
      return pages;
  }
}

export function currentPageReducer(current = 1, action) {
  let currentPageCopy = current;

  switch(action.type) {
    case GET_CURRENT_PAGE: 
      currentPageCopy = action.page;
      return currentPageCopy;
    default: 
      return current;
  }
}

export function totalPagesReducer(pageCount = 0, action) {
  let pageCountCopy = pageCount;

  switch(action.type) {
    case CREATE_ISSUES_LIST:
      pageCountCopy = action.payload.numOfPages;
      return pageCountCopy;
    default: 
      return pageCount;
  }
}

export function displayingReducer(display = false, action) {
  let displayCopy = display;
console.log(action)
  switch(action.type) {
    case DISPLAY_ISSUE:
      return !displayCopy;
    case HIDE_ISSUE:
    console.log(action.type, displayCopy)
      return !displayCopy;
    default:
      return display;
  }
}

export function currentIssueDisplayReducer(currentIssue = 0, action){
  switch(action.type){
    case DISPLAY_ISSUE:
      return action.payload.id;
    default:
      return currentIssue;
  }
}
