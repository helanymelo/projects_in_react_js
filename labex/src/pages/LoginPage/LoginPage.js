import React from 'react'
import {  Button } from '@material-ui/core'
import { LoginForm, FormContainer } from './styles'

import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [form, onChangeInput] = useForm({
    email: '',
    password: ''
  })

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.password
      
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/helany-johnson/login', body)
    .then((response) => {
      window.localStorage.setItem('token', response.data.token)
      navigate('/lista-viagem')
    })
  }
  
  console.log(form)
  

  return <FormContainer>
    <LoginForm onSubmit={onSubmitLogin}>
      <h3>LOGIN</h3>
      <input
        label={'Email'}
        type={'email'}
        onChange={onChangeInput}
        value={form['email']}
        name={'email'}
      />
      <input
        label={'Senha'}
        type={'password'}
        onChange={onChangeInput}
        value={form['password']}
        name={'password'}
      />
      <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
    </LoginForm>
  </FormContainer>
}

export default LoginPage