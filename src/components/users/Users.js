import React, { useContext, Fragment } from 'react';
import GithubContext from '../../contexts/github/githubContext';
import Spinner from '../layouts/Spinner';
import UserItem from './UserItem';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users } = githubContext; 
  return (
    <Fragment>
      <Spinner />
      <div className='grid grid-cols-3 gap-4 mt-4'>
        {users.map( userItem => <UserItem userItem={userItem} key={userItem.id} /> )}
      </div>
    </Fragment>
  )
};

export default Users;
