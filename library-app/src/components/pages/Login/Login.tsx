import axios from 'axios'
import React, { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginRequest, { LoginRequestData } from '../../../services/auth'
import MainLayout from '../../Layout/MainLayout'
import styles from './Login.module.css'

interface LoginProps {
  setAccessToken: Dispatch<SetStateAction<string | null>>
}

const Login = ({ setAccessToken }: LoginProps) => {
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
    if (currentTarget.value.trim() === '') {
      setEnteredEmailIsValid(false)
    }
    setEnteredEmail(currentTarget.value)
    setEnteredEmailIsValid(true)
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
      console.log('greska')
    } else {
      await LoginRequest(formData)
        .then(({ data }) => {
          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshToken', data.refreshToken)
          localStorage.setItem('expiration', data.expiration)
          setAccessToken(data.accessToken)
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

  const emailInputIsInvalid = !enteredEmailIsValid
  const emailInputClasses = emailInputIsInvalid
    ? `${styles['form-group']} ${styles['invalid']}`
    : styles['form-group']

  const passwordInputIsInvalid = !enteredPasswordIsValid
  const passwordInputClasses = passwordInputIsInvalid
    ? `${styles['form-group']} ${styles['invalid']}`
    : styles['form-group']

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Login</h1>
        <form className={styles['form']} onSubmit={formSubmissionHandler}>
          <div className={emailInputClasses}>
            <label htmlFor='email'>
              {emailInputIsInvalid ? 'Please enter email' : 'Email'}
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
