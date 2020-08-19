import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT } from '../types.js';

const AlertState = props => {
  const initStates = { alert: false };
  const [ state, dispatch ] = useReducer( AlertReducer, initStates );
  const setAlert = () => {
    dispatch({ type: SET_ALERT, payload: { alert: true } });
    setTimeout(() => dispatch({ type: SET_ALERT, payload: { alert: false } }), 1000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

