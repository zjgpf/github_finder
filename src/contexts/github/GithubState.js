import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  SET_ALERT,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS
} from '../types';

const GithubState = props => {
  const initState = {
    users: [],
    user: {},
    repos: [],
    alert: false,
    loading: false
  };
  const [ state, dispatch ] = useReducer(GithubReducer, initState); 
  const searchUsers = async text => {
    clearUsers();
    setLoading();
    const _data = await fetch(`https://api.github.com/search/users?q=${text}`);   
    const data = await _data.json();
    dispatch({ type: SEARCH_USERS, payload: data.items });
  };
  const getUser = async userName => {
    setLoading();
    const _data = await fetch(`https://api.github.com/users/${userName}`);
    const data = await _data.json();
    dispatch({ type: GET_USER, payload: data });
  };
  const getRepos = async userName => {
    setLoading();
    const _data = await fetch(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc`);
    const data = await _data.json();
    dispatch({ type: GET_REPOS, payload: data });
  };
  const setAlert = () => {
    dispatch({ type: SET_ALERT, payload: true });
    setTimeout(() => dispatch({ type: SET_ALERT, payload: false }), 1000);
  };
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        alert: state.alert,
        loading: state.loading,
        searchUsers,
        setAlert,
        clearUsers,
        getUser,
        getRepos
      }}
    >
      { props.children }
    </GithubContext.Provider>
  );
};

export default GithubState;
