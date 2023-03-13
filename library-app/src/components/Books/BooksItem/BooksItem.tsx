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
        <img src={`data:image/png;base64, ${book.Cover}`} alt='' className={styles['book-img']} />
        <div className={styles['about-book']}>
          <h2>{book.Title}</h2>
          <p>{book.Description}</p>

          <div>
            {book.Authors &&
              book.Authors.map((Author) => <p key={Author.Id}>{Author.FirstName}</p>)}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default BooksItem
