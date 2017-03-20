import { CREATE_ISSUES_LIST, GET_CURRENT_PAGE, DISPLAY_ISSUE, HIDE_ISSUE } from '../actions/actions_pages';

export function pagesReducer(pages = {}, action) {
  const pageCopy = pages;
  switch (action.type) {
    case CREATE_ISSUES_LIST:
      //create a key with the page number with the value being
      //all the issues associated with that page.
      for (let i = 1; i <= action.payload.numOfPages; i++) {
        pageCopy[i] = action.payload.data.splice(0, action.payload.issuesPerPage);
      }
      return pageCopy;
    default:
      return pageCopy;
  }
}

export function currentPageReducer(current = 1, action) {
  switch (action.type) {
    case GET_CURRENT_PAGE:
      return action.page;
    default:
      return current;
  }
}

export function totalPagesReducer(pageCount = 0, action) {
  switch (action.type) {
    case CREATE_ISSUES_LIST:
      return action.payload.numOfPages;
    default:
      return pageCount;
  }
}

export function displayingReducer(display = false, action) {
  let displayCopy = display;
  switch (action.type) {
    case DISPLAY_ISSUE:
      return !displayCopy;
    case HIDE_ISSUE:
      return !displayCopy;
    default:
      return display;
  }
}

export function currentIssueDisplayReducer(currentIssue = 0, action){
  switch (action.type) {
    case DISPLAY_ISSUE:
      return action.payload.id;
    default:
      return currentIssue;
  }
}
