import React from 'react';

const Alert = ({showAlert}) => {
  return (
  showAlert && (<div className='alert alert-light'>
    Please enter user...
  </div>)
  )
}

export default Alert;
