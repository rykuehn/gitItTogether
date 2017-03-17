import { combineReducers } from 'redux'
import _ from 'underscore';
import { REQUEST_PAGE, RECEIVE_PAGE } from '../actions/actions_pages';

export function pages(pages ={}, action) {
  const pageCopy = _.extend({}, pages);
  switch(action.type) {
    case REQUEST_PAGE:
      return 
        pageCopy[action.payload.page] = {
          id: [],
          fetching: true
        }
    case RECEIVE_PAGE:
      return 
        pageCopy[action.payoad.page] = {
          ids: action.payload.results.filter(item => item.id),
          fetching: false
        
      }
    default: 
      return pages;
  }
}

export function currentPage(currentPage = 1, action = {}){
  return action.type == REQUEST_PAGE ? action.payload.page : currentPage
}

// const todos = (todos = {}, action = {}) {
//   switch (action.type) {
//     case 'RECEIVE_ALL_TODOS':
//     case 'RECEIVE_TODO_PAGE':
//       let _todos = {}
//       for (let todo of action.payload.todos) {
//         _todos = {
//           ..._todos,
//           [todo.id]: todo
//         }
//       }
//       return {
//         ...todos,
//         ..._todos
//       }
//     default:
//       return todos
//   }
// }

