import styles from './Footer.module.css'
import home from '../../assets/icons/home.png'
import account from '../../assets/icons/account.png' // loader comp za slike
import showMore from '../../assets/icons/showMore.png'
import { useState } from 'react'

export const Footer = () => {
  const [admin, setAdmin] = useState(false)

  return (
    <div>
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
            <a>
              <img src={showMore} alt='' />
            </a>
          </div>
        )}
      </footer>
    </div>
  )
}

export default Footer
