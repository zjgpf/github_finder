import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className='flex justify-between bg-red-500 text-red-100 p-2'>
    <div className='flex items-center'>
      <h1 className='text-4xl'><i className='fab fa-github'></i> Github Finder</h1>
    </div>
    <div className='flex items-center'>
      <Link className='p-4' to='/'>Home</Link>
      <Link className='p-4' to='/about'>About</Link>
    </div>
  </div>
);

export default Navbar;
