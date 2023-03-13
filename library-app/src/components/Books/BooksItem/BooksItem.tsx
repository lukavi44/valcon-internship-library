import { BookBodyDataGet } from '../../../models/bookData.model'
import Card from '../../UI/Card'
import styles from './BooksItem.module.css'

export interface BookProps {
  Book: BookBodyDataGet
}

const BooksItem = ({ Book }: BookProps) => {
  return (
    <Card>
      <div className={styles['book-holder']}>
        <img src={`data:image/png;base64, ${Book.Cover}`} alt='' className={styles['book-img']} />
        <div className={styles['about-book']}>
          <h2>{Book.Title}</h2>
          <p>{Book.Description}</p>

          <div>
            {Book.Authors &&
              Book.Authors.map((Author) => <p key={Author.Id}>{Author.FirstName}</p>)}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default BooksItem
