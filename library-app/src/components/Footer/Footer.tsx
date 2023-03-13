import styles from './Footer.module.css'
import home from '../../assets/icons/home.png'
import account from '../../assets/icons/account.png'
import showMore from '../../assets/icons/showMore.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainLayoutProps } from '../Layout/MainLayout'

export const Footer = ({ isLoggedIn }: MainLayoutProps) => {
  const [adminOptions, setAdminOptions] = useState(false)
  const navigateTo = useNavigate()

  const closeAdminOptions = () => {
    setAdminOptions(false)
  }

  const handleHomeNavigation = () => {
    navigateTo('/')
  }

  return (
    <footer className={styles.footer}>
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
      {adminOptions && (
        <div className={styles['btn-holder']}>
          <a onClick={() => setAdminOptions(!adminOptions)}>
            <img src={showMore} alt='' />
          </a>
        </div>
      )}
      {adminOptions && (
        <nav className={styles.sidebar}>
          <div className={styles['btn-holder']}>
            <button className={styles['back-btn']} onClick={closeAdminOptions}>
              Back
            </button>
          </div>
          <div className={styles['btn-holder']}>
            <a>
              <img src={account} alt='' />
            </a>
          </div>
          <div className={styles['btn-holder']}>
            <a>
              <img src={account} alt='' />
            </a>
          </div>
        </nav>
      )}
    </footer>
  )
}

export default Footer
