import Card from '../../UI/Card'
import styles from './BooksItem.module.css'
import { BookBodyDataGet } from '../BooksList/BooksList'

export interface BookProps {
  book: BookBodyDataGet
}

const BooksItem = ({ book }: BookProps) => {
  return (
    <Card>
      <div className={styles['book-holder']}>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <a href=''>
          <img src={`data:image/png;base64, ${book.cover}`} alt='' className={styles['book-img']} />
        </a>
        <div>
          {book.authors.map((author) => (
            <p key={author.id}>{author.firstname}</p>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default BooksItem
