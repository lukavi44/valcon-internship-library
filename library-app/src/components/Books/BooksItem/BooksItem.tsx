import Card from '../../UI/Card'
import book1 from '../../../assets/placeholderImg/book1.png'
import styles from './BooksItem.module.css'
const BooksItem = () => {
  return (
    <Card>
      <a href=''>
        <img src={book1} alt='' className={styles['book-img']} />
      </a>
    </Card>
  )
}

export default BooksItem
