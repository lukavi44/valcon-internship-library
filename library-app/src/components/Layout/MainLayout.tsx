import Footer from '../Footer/Footer'
import styles from './MainLayout.module.css'

export interface IMainLayout {
  children: React.ReactNode
}

// eslint-disable-next-line react/prop-types
const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div className={styles.wrapp}>
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
