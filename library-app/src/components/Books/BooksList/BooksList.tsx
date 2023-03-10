import BooksItem from '../BooksItem/BooksItem'
import styles from './BooksList.module.css'
import sort from '../../../assets/icons/sort.png'
import { useEffect, useState } from 'react'
import Modal from '../../Layout/Modal'
import ManageBookForm from './ManageBookForm'
import { getBooksRequest } from '../../../services/BooksServices'
import Author from '../../../models/author.model'

export interface BookBodyDataGet {
  id: number
  title: string
  description: string
  isbn: string
  quantity: number
  cover: string
  publishDate: string
  authors: Author[]
}

const BooksList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [books, setBooks] = useState<BookBodyDataGet[]>([
    {
      id: 0,
      title: '',
      description: '',
      isbn: '',
      quantity: 0,
      cover: '',
      publishDate: '',
      authors: [],
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
        {books.map((book) => (
          <BooksItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default BooksList
