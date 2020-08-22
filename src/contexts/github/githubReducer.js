import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  CLEAR_USERS
} from '../types';

export default ( state, action )=> {
  switch(action.type) {
    case SET_ALERT: return {
      ...state,
      alert: action.payload
    };
    case SEARCH_USERS: return {
      ...state,
      loading: false,
      users: action.payload
    };
    case SET_LOADING: return {
      ...state,
      loading: true,
    };
    case CLEAR_USERS: return {
      ...state,
      users: []
    };
    case GET_USER: return {
      ...state,
      user: action.payload,
      loading: false
    };
    case GET_REPOS: return {
      ...state,
      repos: action.payload,
      loading: false
    };
    default: return state;
  }
};
