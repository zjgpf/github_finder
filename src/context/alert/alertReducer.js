import {
  SET_ALERT
} from '../types.js';

export default ( state, action ) => {
  switch( action.type ) {
    case SET_ALERT: return action.payload;
    default: return state;  
  }
}
