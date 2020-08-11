import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({loading, users}) => loading ? <Spinner /> : <div className='grid-3'>
                {
                  users.map(
                    user => <UserItem key={user.id} user={user} />
                  ) 
                }
              </div>


export default Users;
