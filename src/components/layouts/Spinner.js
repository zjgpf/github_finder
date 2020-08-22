import React, { useContext } from 'react';
import spinner from './spinner.gif';
import GithubContext from '../../contexts/github/githubContext';

const Spinner = () => { 
  const githubContext = useContext(GithubContext);
  return githubContext.loading && <div className='flex justify-center items-center'>
    <img alt='' src={spinner} />
  </div>
};

export default Spinner;
