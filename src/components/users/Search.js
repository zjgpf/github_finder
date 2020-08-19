import React, { useState, Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [ text, setText] = useState('');

  const onChange = e => setText( e.target.value );

  const onSubmit = e => {
    e.preventDefault();
    if( text !== '') {
      githubContext.searchUsers(text);
      setText('');
    }
    else {
      alertContext.setAlert();
    }
  }

    return (
      <Fragment>
        <form onSubmit={onSubmit}>
          <input type='text' name='text' onChange={onChange} value={text} placeholder='Enter name...' />
          <input type='submit' className='btn btn-dark btn-block' />
        </form>
        {githubContext.users.length > 0 && (<button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>clear</button>)}
      </Fragment>
    )

}

export default Search;
