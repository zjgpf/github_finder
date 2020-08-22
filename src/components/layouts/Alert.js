import React, { useContext } from 'react';
import GithubContext from '../../contexts/github/githubContext';

const Alert = () => {
  const githubContext = useContext(GithubContext);
  return (
    githubContext.alert && <div className='p-4 mb-2 bg-gray-300'>Please enter user name.</div>
  );
};

export default Alert;
