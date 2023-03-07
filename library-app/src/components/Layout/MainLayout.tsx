import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Search from '../Search/Search'
import styles from './MainLayout.module.css'

export interface IMainLayout {
  children: React.ReactNode
}

// eslint-disable-next-line react/prop-types
const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div className={styles.wrapp}>
      <Header />
      <div className={styles['inside-wrapp']}>
        <Search />
        <div className={styles.children}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
