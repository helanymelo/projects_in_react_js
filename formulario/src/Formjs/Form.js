import React, { useState } from 'react';
import '../Form.css';
import FormSignUp from "../FormSignUp/FormSignUp"
import FormSuccess from "../FormSuccess/FormSuccess"

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          
        </div>
          <FormSignUp submittedForm={submitForm}/>
      </div>
    </>
  );
};

export default Form;
