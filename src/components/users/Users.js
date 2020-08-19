import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
      const githubContext = useContext(GithubContext);
      const { loading, users } = githubContext;
      return loading ? <Spinner /> : <div className='grid-3'>
                {
                  users.map(
                    user => <UserItem key={user.id} user={user} />
                  ) 
                }
              </div>
      }


export default Users;
