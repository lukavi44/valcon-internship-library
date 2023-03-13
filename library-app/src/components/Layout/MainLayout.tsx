import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './MainLayout.module.css'

export interface IMainLayout {
  children: React.ReactNode
}
export interface MainLayoutProps {
  isLoggedIn: boolean
}

const MainLayout: React.FC<IMainLayout> = ({ children }: React.PropsWithChildren<IMainLayout>) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showHeader, setIsHeaderShowing] = useState(true)
  const currentPathName = window.location.pathname

  if (currentPathName === '/login') {
    useEffect(() => {
      setIsHeaderShowing(false)
    }, [])
  }
  return (
    <div className={styles.wrapp}>
      <Sidebar isLoggedIn={isLoggedIn} />
      <div className={styles['inside-wrapp']}>
        {showHeader && <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        <div className={styles.children}>{children}</div>
      </div>
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default MainLayout
