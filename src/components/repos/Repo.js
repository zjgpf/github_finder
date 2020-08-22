import React from 'react';

const Repo = ({repo}) => (
  <div className='border-2 my-2 p-4'>
    <a href={repo.html_url} >{repo.name}</a>
  </div>
);

export default Repo;
