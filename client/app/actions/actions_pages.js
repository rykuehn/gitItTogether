export const CREATE_ISSUES_LIST = 'CREATE_ISSUES_LIST';
export const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE';
export const DISPLAY_ISSUE = 'DISPLAY_ISSUE';

export function issues(data) {
  const issuesPerPage = 25;
  const numOfPages = Math.ceil(data.length / issuesPerPage);
  localStorage.setItem('issues', JSON.stringify(data));
  return {
    type: CREATE_ISSUES_LIST,
    payload: {
      data,
      numOfPages,
      issuesPerPage,
    },
  };
}

export function currentPage(page) {
  return {
    type: GET_CURRENT_PAGE,
    page,
  };
}

export function displayIssue(page, positionOnCurrentPage) {
  return {
    type: DISPLAY_ISSUE,
    payload: {
      page,
      positionOnCurrentPage,
    },
  };
}
