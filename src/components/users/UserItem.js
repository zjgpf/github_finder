import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ( { userItem } )=> (
  <div className='flex flex-col justify-center items-center m-2 border text-center p-4'>
    <img className='w-20 rounded-full' alt='' src={userItem.avatar_url} />
    <p className='py-2' >{userItem.login}</p>
    <Link to={`/user/${userItem.login}`} className='bg-black text-white px-4 py-2'>More</Link>
  </div>
);

export default UserItem;
