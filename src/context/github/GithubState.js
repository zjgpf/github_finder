import React, { useReducer } from 'react';
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING
} from '../types';

const GithubState = props => {

  const initStates = { 
                        users: [],
                        user: {},
                        loading: false,
                        repos: []
                      };
  const [ state, dispatch ] = useReducer( GithubReducer, initStates );
  const setLoading = () => dispatch({ type: SET_LOADING });
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  const searchUsers = async text => {
    setLoading();
    const data = await fetch(`https://api.github.com/search/users?q=${text}`);
    const _users = await data.json();
    const users = _users.items;
    dispatch( { type: SEARCH_USERS, payload: users } );
  };
  const getUser = async userName => {
    setLoading();
    const data = await fetch(`https://api.github.com/users/${userName}`);
    const user = await data.json();
    dispatch({ type: GET_USER, payload: user });
  }
  const getRepos = async userName => {
    setLoading();
    const data = await fetch(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc`);
    const repos = await data.json();
    dispatch({ type: GET_REPOS, payload: repos });
  }
  
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
        setLoading
      }}
    >
      {props.children}
    </GithubContext.Provider>
  ); 
};

export default GithubState;
