import React, { useState } from 'react';
import './LForm.css';
import FormLogin from './FormLogin';
import FormSuccess from './FormSuccess';
import Header from '../Home/Header.js';

const LForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Header/>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default LForm;