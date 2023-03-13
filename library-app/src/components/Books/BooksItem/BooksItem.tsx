import { BookBodyDataGet } from '../../../models/bookData.model'
import Card from '../../UI/Card'
import styles from './BooksItem.module.css'
import { useEffect, useState } from 'react'
import imgPlaceholder from '../../../assets/placeholderImg/placeholder.jpeg'

export interface BookProps {
  Book: BookBodyDataGet
}

const BooksItem = ({ Book }: BookProps) => {
  const [coverPlaceholder, setCoverPlaceholder] = useState('')

  useEffect(() => {
    setCoverPlaceholder(imgPlaceholder)
  }, [])

  return (
    <Card>
      <div className={styles['book-holder']}>
        <div className={styles['img-holder']}>
          <img
            src={Book.Cover ? `data:image/png;base64, ${Book.Cover}` : coverPlaceholder}
            alt=''
            className={styles['book-img']}
          />
        </div>
        <div className={styles['about-book']}>
          <h2>{Book.Title}</h2>
          <div className={styles['published-date']}>
            <p>Published:</p>
            <p>{Book.PublishDate}</p>
          </div>
          <p>
            {Book.Description?.substring(0, 50)}
            {Book.Description?.length > 50 ? '...' : ''}
          </p>
          <label>Author(s):</label>
          {Book.Authors &&
            Book.Authors.map((Author) => (
              <p key={Author.Id}>
                {Author.Firstname} {Author.Lastname}
              </p>
            ))}
        </div>
      </div>
      <div className={styles['actions-btn-holder']}>
        <button className={styles['action-btn']} id={styles.edit}>
          Edit
        </button>
        <button className={styles['action-btn']} id={styles.delete}>
          Delete
        </button>
        <button className={styles['action-btn']} id={styles.rent}>
          Rent
        </button>
      </div>
    </Card>
  )
}

export default BooksItem
