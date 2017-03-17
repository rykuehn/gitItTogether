export const CREATE_ISSUES_LIST = 'CREATE_ISSUES_LIST';
export const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE';

export function issues(data) {
  const issuesPerPage = 25;
  const numOfPages= Math.ceil(data.length / issuesPerPage);
  return {
    type: CREATE_ISSUES_LIST,
    payload: {
      data,
      numOfPages
    }
  }
};

export function currentPage(page) {
  console.log('worked')
  return {
    type: GET_CURRENT_PAGE,
    page
  }
}

