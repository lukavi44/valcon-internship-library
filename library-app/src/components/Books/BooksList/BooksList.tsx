import BooksItem from '../BooksItem/BooksItem'
import styles from './BooksList.module.css'
import { useEffect, useState } from 'react'
import Modal from '../../Layout/Modal'
import ManageBookForm from './ManageBookForm'
import { getBooksRequest } from '../../../services/BooksServices'
import { BookBodyDataGet } from '../../../models/bookData.model'

const BooksList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [books, setBooks] = useState<BookBodyDataGet[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const responseData = await getBooksRequest()
      setBooks(responseData.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.wrapp}>
      <div className={styles.background}></div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ManageBookForm />
      </Modal>
      <div className={styles['books-wrap']}>
        {!books && <p>Nema dostupnih knjiga</p>}
        {books && books.map((book) => <BooksItem key={book.Id} Book={book} />)}
      </div>
    </div>
  )
}

export default BooksList
