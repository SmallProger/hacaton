import React from 'react';
import errImg from '../../assets/error-svgrepo-com.svg';
import './ErrorIndicator.css';

function ErrorIndicator() {
  return (
    <div className='error-wrapper'>
      <img className='error-wrapper__img' src={errImg} width={100} height={100} alt='error img'></img>
      <p className='error-text'>error</p>
    </div>
  )
}
export { ErrorIndicator }