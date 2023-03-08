import BooksItem from '../BooksItem/BooksItem'
import styles from './BooksList.module.css'

const BooksList = () => {
  return (
    <div className={styles.wrapp}>
      <BooksItem />
      <BooksItem />
      <BooksItem />
      <BooksItem />
      <BooksItem />
      <BooksItem />
      <BooksItem />
      <BooksItem />
      <BooksItem />
    </div>
  )
}

export default BooksList
