import React, { useContext } from 'react';
import GithubContext from '../../contexts/github/githubContext';
import Repo from './Repo';

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext; 
  return (
    repos.map( repo => <Repo repo={repo} key={repo.id} /> )
  );
};

export default Repos;
