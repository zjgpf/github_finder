import React, { Fragment, useState, useContext } from 'react';
import GithubContext from '../../contexts/github/githubContext';

const Search = () => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const submit = e => {
    e.preventDefault();
    if ( text === '' ) githubContext.setAlert();
    else {
      githubContext.searchUsers(text);
      setText('');
    }
  }
  return (
    <Fragment>
      <form onSubmit={submit}>
        <input type='text' value={text} onChange={e => setText(e.target.value.trim())} placeholder='Enter name...' className='p-2 w-full mt-4 border' />
        <input type='submit' value='Submit' className='cursor-pointer p-2 w-full mt-4 bg-gray-800 text-gray-200' />
      </form>
      { githubContext.users.length > 0 && (<button onClick={ () => githubContext.clearUsers() } className='cursor-pointer p-2 w-full mt-4 bg-gray-200 text-gray-800'>Clear</button>) }
    </Fragment>
  );
};

export default Search;
