import React, { useState } from 'react'
import LoginRequest, { LoginRequestData } from '../../../services/auth'
import MainLayout from '../../Layout/MainLayout'
import styles from './Login.module.css'

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')

  const handleUsernameChange = (event: any) => {
    setEnteredEmail(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    setEnteredPassword(event.target.value)
    console.log(enteredPassword)
  }

  const formSubmissionHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData: LoginRequestData = {
      email: enteredEmail,
      password: enteredPassword,
    }
    if (enteredEmail.length === 0 || enteredPassword.length === 0) {
      console.log('greska')
    } else {
      const { data } = await LoginRequest(formData)
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
      localStorage.setItem('expiration', data.expiration.toISOString())

      console.log(data)
    }
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Login</h1>
        <form className={styles['form']} onSubmit={formSubmissionHandler}>
          <div className={styles['form-group']}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' value={enteredEmail} onChange={handleUsernameChange} />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={enteredPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={styles['form-group']}>
            <button className={styles.btn} type='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  )
}

export default Login
