import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './MainLayout.module.css'

export interface IMainLayout {
  children: React.ReactNode
}

const MainLayout: React.FC<IMainLayout> = ({ children }: React.PropsWithChildren<IMainLayout>) => {
  return (
    <div className={styles.wrapp}>
      <Sidebar />
      <div className={styles['inside-wrapp']}>
        <Header />
        <div className={styles.children}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
