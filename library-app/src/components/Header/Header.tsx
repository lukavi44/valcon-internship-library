import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import search from '../../assets/icons/search.png'
import styles from './Header.module.css'
import sort from '../../assets/icons/sort.png'
import { Link } from 'react-router-dom'

const Header = ({
  isLoggedIn,
  setIsLoggedIn,
}: {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}) => {
  const [position, setPosition] = useState(window.scrollY)
  const [isVisible, setIsVisible] = useState(true)

  const handleLogout = () => {
    if (localStorage.getItem('accessToken')) {
      localStorage.clear()
    }
    setIsLoggedIn(false)
  }

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      setIsLoggedIn(false)
    }
    if (localStorage.getItem('accessToken')) {
      setIsLoggedIn(true)
    }
  }, [setIsLoggedIn])

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY
      setIsVisible(position > moving)
      setPosition(moving)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [position, isVisible])

  return (
    <React.Fragment>
      <header
        className={styles['search-holder']}
        style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      >
        <input type='search' name='search' id='search' className={styles.input} />
        <button className={styles['search-btn']}>
          <img src={search} alt='' className={styles['search-img']} />
        </button>
        <button className={styles.sort}>
          <img src={sort} alt='' />
        </button>
        <Link to='login'>
          {isLoggedIn && (
            <button className={styles['login-btn']} type='submit' onClick={handleLogout}>
              Logout
            </button>
          )}
          {!isLoggedIn && (
            <button className={styles['login-btn']} type='submit'>
              Login
            </button>
          )}
        </Link>
      </header>
    </React.Fragment>
  )
}

export default Header
