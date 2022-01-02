import React from 'react'
import useForm from '../useForm/useForm'
import validadeInfo from '../validationInfo/validationInfo'
import '../Form.css'



const FormSignUp = ({submittedForm}) => {
    const {handleChange, values, handleSubmit, erros}=useForm(validadeInfo, submittedForm )
    return (
        <div className="form-content-right">
            <form className='form' onSubmit={handleSubmit}>
                <h1>Create your account</h1>
                <div className="form-inputs" >
                    <label htmlFor= "name" className='form-label'>
                        Name:
                    </label>
                    <input 
                    id='name'
                    type="text" 
                    className="form-inputs"  
                    name='name' 
                    placeholder='Name'
                    value={values.name}
                    onChange={handleChange}/>
                    {erros.name && <p>{erros.name}</p>}    
                </div>

                <div className="form-inputs" >
                    <label htmlFor= "email" className='form-label'>
                        E-mail:
                    </label>
                    <input 
                    id='email'
                    type="email" 
                    className='form-inputs' 
                    name='email' 
                    placeholder='E-Mail'
                    value={values.email}
                    onChange={handleChange}/>
                    {erros.email && <p>{erros.email}</p>}    
                </div>

                <div className='form-inputs'>
                    <label htmlFor= "password" className='form-label'>
                     Password:
                    </label>
                    <input 
                    id='password'
                    type="password" 
                    className='form-inputs' 
                    name='password' 
                    placeholder='password'
                    value={values.password}
                    onChange={handleChange}/>  
                    {erros.password && <p>{erros.password}</p>}    
                </div>

                <div className='form-inputs'>
                    <label htmlFor= "password2" className='form-label'>
                    Confirm your password:
                    </label>
                    <input 
                    id='password2'
                    type="password" 
                    className='form-inputs' 
                    name='password2' 
                    placeholder='Confirm your password'
                    value={values.password2}
                    onChange={handleChange}/> 
                    {erros.password2 && <p>{erros.password2}</p>}    
   
                </div>
                <button className='form-input-btn' type='submit'>Acessar</button>
                <span className='form-input-login'>Já tem uma conta? Acesse <a href="#">here</a></span>
            </form>
        </div> 
    )
}

export default FormSignUp
