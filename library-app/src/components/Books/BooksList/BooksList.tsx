import BooksItem from '../BooksItem/BooksItem'
import styles from './BooksList.module.css'
import sort from '../../../assets/icons/sort.png'
import { useState } from 'react'
import Modal from '../../Layout/Modal'
import ManageBookForm from './ManageBookForm'

const BooksList = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.wrapp}>
      <div className={styles['button-holder']}>
        <button className={styles.sort}>
          <img src={sort} alt='' />
        </button>
        <button type='submit' onClick={() => setIsOpen(true)}>
          Add New Book
        </button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ManageBookForm />
      </Modal>
      <div className={styles['books-wrap']}>
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
    </div>
  )
}

export default BooksList
