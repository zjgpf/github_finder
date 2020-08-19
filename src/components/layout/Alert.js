import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  return (
  alertContext.alert && (<div className='alert alert-light'>
    Please enter user...
  </div>)
  )
}

export default Alert;
