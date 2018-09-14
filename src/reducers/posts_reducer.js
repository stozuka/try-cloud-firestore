import {
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST,
  CONNECTION_ERROR
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case CREATE_POST:
      const names = state.map(elem => elem.name);
      if (names.includes(action.payload.name)) {
        return state;
      }
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(elem => {
        if (elem.name === action.payload) {
          return false;
        }
        return true;
      });
    case CONNECTION_ERROR:
      return state;
    default:
      return state;
  }
}
