import styles from './Footer.module.css'
import home from '../../assets/icons/home.png'
import account from '../../assets/icons/account.png' // loader comp za slike
import showMore from '../../assets/icons/showMore.png'
import { useEffect, useState } from 'react'

export const Footer = () => {
  const [admin, setAdmin] = useState(false)
  const [adminOptions, setAdminOptions] = useState(false)

  useEffect(() => {
    return
  }, [])

  const closeAdminOptions = () => {
    setAdminOptions(false)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles['btn-holder']}>
        <a className={styles.a} onClick={() => setAdmin(!admin)}>
          <img src={home} alt='' />
        </a>
      </div>
      <div className={styles['btn-holder']}>
        <a className={styles.a}>
          <img src={account} alt='' />
        </a>
      </div>
      {admin && (
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
            <a className={styles.a}>
              <img src={account} alt='' />
            </a>
          </div>
          <div className={styles['btn-holder']}>
            <a className={styles.a}>
              <img src={account} alt='' />
            </a>
          </div>
        </nav>
      )}
    </footer>
  )
}

export default Footer
