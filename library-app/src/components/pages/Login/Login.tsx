import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setLocalStorage } from '../../../helpers/manageLocalStorage'
import LoginRequest, { LoginRequestData } from '../../../services/auth'
import MainLayout from '../../Layout/MainLayout'
import styles from './Login.module.css'

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false)

  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false)

  const [invalidCredentials, setInvalidCredentials] = useState(false)

  const navigateTo = useNavigate()

  useEffect(() => {
    setEnteredEmailIsValid(true)
    setEnteredPasswordIsValid(true)
  }, [])

  const handleEmailChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    if (currentTarget.value === '') {
      setEnteredEmailIsValid(false)
    } else {
      setEnteredEmailIsValid(true)
    }
    setEnteredEmail(currentTarget.value)
  }

  const handleOnBlurEmail = () => {
    if (enteredEmail.trim() === '') {
      setEnteredEmailIsValid(false)
      return
    }
  }
  const handleOnBlurPassword = () => {
    if (enteredPassword.trim() === '') {
      setEnteredPasswordIsValid(false)
      return
    }
  }

  const handlePasswordChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    if (currentTarget.value.trim() === '') {
      setEnteredPasswordIsValid(false)
    }
    setEnteredPassword(currentTarget.value)
    setEnteredPasswordIsValid(true)
  }

  const formSubmissionHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData: LoginRequestData = {
      email: enteredEmail,
      password: enteredPassword,
    }
    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return
    } else {
      await LoginRequest(formData)
        .then(({ data }) => {
          setLocalStorage(data)
          navigateTo('/')
          console.log(data)
        })
        .catch((error) => {
          if (axios.isAxiosError(error)) {
            if (error.response?.status === 401) {
              setInvalidCredentials(true)
              console.log('pogresni kredencijali')
            }
          }
        })
    }
  }

  const unmatchedCredentials = invalidCredentials
  const unmatchedCredentialsClasses = unmatchedCredentials ? styles['invalid-credentials'] : ''

  const emailInputClasses = enteredEmailIsValid
    ? styles['form-group']
    : `${styles['form-group']} ${styles['invalid']}`

  const passwordInputIsInvalid = !enteredPasswordIsValid
  const passwordInputClasses = passwordInputIsInvalid
    ? `${styles['form-group']} ${styles['invalid']}`
    : styles['form-group']

  return (
    <MainLayout isLoggedIn>
      <div className={styles.container}>
        <h1>Login</h1>
        <form className={styles['form']} onSubmit={formSubmissionHandler}>
          <div className={emailInputClasses}>
            <label htmlFor='email'>
              {!enteredEmailIsValid ? 'Please enter email' : 'Email'}
              {}
            </label>
            <input
              type='email'
              id='email'
              value={enteredEmail}
              onChange={handleEmailChange}
              onBlur={handleOnBlurEmail}
            />
          </div>
          <div className={passwordInputClasses}>
            <label htmlFor='password'>
              {passwordInputIsInvalid ? 'Please enter password' : 'Password'}
            </label>
            <input
              type='password'
              id='password'
              value={enteredPassword}
              onChange={handlePasswordChange}
              onBlur={handleOnBlurPassword}
            />
          </div>
          <div className={styles['form-group']}>
            <button className={styles.btn} type='submit'>
              Login
            </button>
          </div>
          {invalidCredentials && (
            <div className={unmatchedCredentialsClasses}>
              <p>User is not found</p>
            </div>
          )}
        </form>
      </div>
    </MainLayout>
  )
}

export default Login
