import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import home from '../../assets/icons/home.png'
import account from '../../assets/icons/account.png' // loader comp za slike
import showMore from '../../assets/icons/showMore.png'
import { useNavigate } from 'react-router-dom'
import { MainLayoutProps } from '../Layout/MainLayout'

const Sidebar = ({ isLoggedIn }: MainLayoutProps) => {
  const [adminOptions, setAdminOptions] = useState(false)

  const navigateTo = useNavigate()

  const handleHomeNavigation = () => {
    navigateTo('/')
  }

  return (
    <React.Fragment>
      <nav className={styles.header}>
        <div className={styles['btn-holder']} onClick={handleHomeNavigation}>
          <a>
            <img src={home} alt='' />
          </a>
        </div>
        {isLoggedIn && (
          <div className={styles['btn-holder']}>
            <a>
              <img src={account} alt='' />
            </a>
          </div>
        )}
        {isLoggedIn && (
          <div className={styles['btn-holder']} onClick={() => setAdminOptions(!adminOptions)}>
            <a>
              <img src={showMore} alt='' />
            </a>
          </div>
        )}
        {adminOptions && (
          <nav className={styles.sidebar}>
            <div className={styles['btn-holder']}>
              <a>
                <img src={account} alt='admin option1' />
              </a>
            </div>
            <div className={styles['btn-holder']}>
              <a>
                <img src={account} alt='admin option2' />
              </a>
            </div>
          </nav>
        )}
      </nav>
    </React.Fragment>
  )
}

export default Sidebar
