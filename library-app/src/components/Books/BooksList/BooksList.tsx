import BooksItem from '../BooksItem/BooksItem'
import styles from './BooksList.module.css'
import sort from '../../../assets/icons/sort.png'
import { useEffect, useState } from 'react'
import Modal from '../../Layout/Modal'
import ManageBookForm from './ManageBookForm'
import { getBooksRequest } from '../../../services/BooksServices'
import Author from '../../../models/author.model'

export interface BookBodyDataGet {
  Id: number
  Title: string
  Description: string
  Isbn: string
  Quantity: number
  Cover: string
  PublishDate: string
  Authors: Author[]
}

const BooksList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [books, setBooks] = useState<BookBodyDataGet[]>([
    {
      Id: 0,
      Title: '',
      Description: '',
      Isbn: '',
      Quantity: 0,
      Cover: '',
      PublishDate: '',
      Authors: [],
    },
  ])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const responseData = await getBooksRequest()
      setBooks(responseData.data)
      return responseData
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
        {books && books.map((book) => <BooksItem key={book.Id} book={book} />)}
      </div>
    </div>
  )
}

export default BooksList
