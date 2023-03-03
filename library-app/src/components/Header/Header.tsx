import Search from '../Search/Search'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={styles.header}>Header</h1>
      <Search />
    </div>
  )
}

export default Header
