import React, { useState } from 'react'
import styles from './Header.module.css'
import home from '../../assets/icons/home.png'
import account from '../../assets/icons/account.png' // loader comp za slike
import showMore from '../../assets/icons/showMore.png'

const Header = () => {
  const [adminOptions, setAdminOptions] = useState(false)

  return (
    <React.Fragment>
      <nav className={styles.header}>
        <div className={styles['btn-holder']}>
          <a className={styles.a}>
            <img src={home} alt='' />
          </a>
        </div>
        <div className={styles['btn-holder']}>
          <a className={styles.a}>
            <img src={account} alt='' />
          </a>
        </div>

        <div className={styles['btn-holder']} onClick={() => setAdminOptions(!adminOptions)}>
          <a className={styles.a}>
            <img src={showMore} alt='' />
          </a>
        </div>

        {adminOptions && (
          <nav className={styles.sidebar}>
            <div className={styles['btn-holder']}>
              <a className={styles.a}>
                <img src={account} alt='admin option1' />
              </a>
            </div>
            <div className={styles['btn-holder']}>
              <a className={styles.a}>
                <img src={account} alt='admin option2' />
              </a>
            </div>
          </nav>
        )}
      </nav>
    </React.Fragment>
  )
}

export default Header
