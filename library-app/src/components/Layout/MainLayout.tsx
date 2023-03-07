import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './MainLayout.module.css'

export interface IMainLayout {
  children: React.ReactNode
}

// eslint-disable-next-line react/prop-types
const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const [showHeader, setIsHeaderShowing] = useState(true)
  const currentPathName = window.location.pathname
  if (currentPathName === '/login') {
    useEffect(() => {
      setIsHeaderShowing(false)
    }, [])
  }

  return (
    <div className={styles.wrapp}>
      <Sidebar />
      <div className={styles['inside-wrapp']}>
        {showHeader && <Header />}
        <div className={styles.children}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
