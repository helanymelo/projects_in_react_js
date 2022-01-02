import React,{useState} from 'react'
import FormSignUp from '../FormSignUp/FormSignUp'
import FormSuccess from '../FormSuccess/FormSuccess'
import '../Form.css'




const Form = () => {
    const [isSubmitted, setIsSubmitted]=useState(false)
        

   function submittedForm(){
       setIsSubmitted(true)
   }
    
    return (
        <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className ="form-img" src="https://images.tcdn.com.br/img/img_prod/868907/tapete_astronauta_257_1_20200919161854.jpg" alt='spaceship' />
         </div>
        {!isSubmitted ? (
          <FormSignUp submitForm={submittedForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};
        

export default Form
