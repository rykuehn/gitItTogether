export const CREATE_ISSUES_LIST = 'CREATE_ISSUES_LIST';
export const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE';
export const DISPLAY_ISSUE = 'DISPLAY_ISSUE';
export const HIDE_ISSUE = 'HIDE_ISSUE';
import { browserHistory } from 'react-router';

export function issues(data) {
  const issuesPerPage = 25;
  const numOfPages= Math.ceil(data.length / issuesPerPage);

  return {
    type: CREATE_ISSUES_LIST,
    payload: {
      data,
      numOfPages,
      issuesPerPage
    }
  }
};

export function currentPage(page) {
  return {
    type: GET_CURRENT_PAGE,
    page
  }
}

export function displayIssue(page, id) {
  // browserHistory.push('issueProfile');
  return {
    type: DISPLAY_ISSUE,
    payload: {
      page,
      id
    }
  }
}

export function hideIssue() {
  return {
    type: HIDE_ISSUE,
  }
}
