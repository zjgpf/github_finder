import React from 'react';
import { Link } from 'react-router-dom';

const  UserItem = ( { user: { id, login, avatar_url, html_url } } ) => {
    return ( 
      <div className='card text-center'>
        <img src={avatar_url} alt='user name' className='round-img' style={{width: '60px'}} />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
      </div>
    );
}

export default UserItem;
