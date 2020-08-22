import React, { useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../../contexts/github/githubContext';
import Spinner from '../layouts/Spinner';
import Repos from '../repos/Repos';

const User = ({ match }) => {
  const login = match.params.login;
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.getUser(login); 
    githubContext.getRepos(login);
  }, []);
  const { user, loading } = githubContext; 
  const {
    avatar_url,
    html_url,
    name,
    company,
    location,
    hireable,
    public_repos,
    public_gists,
    followers,
    following,
    bio,
    blog
  } = user;
  return (
    <Fragment>
      { loading ? <Spinner /> :
        <div>
          <Link to='/' className='bg-gray-200 py-2 px-3 mt-4 inline-block' >Back to search</Link>
          <span> Hireable {hireable ? <i className='fas fa-check text-green-600' /> : <i className='fas fa-times-circle text-red-600' />}</span>
          <div className='grid grid-cols-2 border-2 my-4 p-4 border-dotted'>
            <div className='flex flex-col justify-center items-center'> 
              <img src={avatar_url} alt='' className='rounded-full w-48' />
              <h1 className='text-4xl'>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div>
              { 
                bio !== '' ? (
                  <Fragment>
                    <p className='text-xl font-bold'>Bio</p>
                    <p>{bio}</p>
                  </Fragment>
                ) : ''
              }
              <a href={html_url} className='py-2 px-3 bg-black text-white my-4 inline-block'>Visit Github Profile</a>
              <p><span className='font-bold'>Username: </span>{login}</p>
              <p><span className='font-bold'>Compay: </span>{company}</p>
              <p><span className='font-bold'>Website: </span>{blog}</p>
            </div>
          </div>
          <div className='border-2 border-dotted my-4 p-4 flex justify-center'>
            <span className='bg-red-600 text-red-100 py-1 px-2 rounded mx-2'>Followers: {followers}</span>
            <span className='bg-green-600 text-green-100 py-1 px-2 rounded mx-2'>Following: {following}</span>
            <span className='bg-gray-200 text-gray-800 py-1 px-2 rounded mx-2'>Public Repos: {public_repos}</span>
            <span className='bg-black text-white py-1 px-2 rounded mx-2'>Public Gists: {public_gists}</span>
          </div>
          <Repos />
        </div>
      }
    </Fragment>
  );
};

export default User;
