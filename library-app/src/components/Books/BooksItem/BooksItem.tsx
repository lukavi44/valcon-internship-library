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
          <p>{Book.Description}</p>

          <div>
            {Book.Authors &&
              Book.Authors.map((Author) => <p key={Author.Id}>{Author.Firstname}</p>)}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default BooksItem
