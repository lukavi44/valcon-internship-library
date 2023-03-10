import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react'
import { postBookRequest } from '../../../services/BooksServices'
import styles from './ManageBookForm.module.css'
import Select, { MultiValue } from 'react-select'
import BookBodyData from '../../../models/bookData.model'
import Author from '../../../models/author.model'
import getAuthors from '../../../services/AuthorServices'

const ManageBookForm = () => {
  const [authors, setAuthors] = useState<Author[]>([])
  const [setCover, setRequestCover] = useState<any>()
  const [formData, setFormData] = useState<BookBodyData>({
    id: 0,
    title: '',
    description: '',
    isbn: '',
    quantity: 0,
    cover: setCover,
    publishDate: '',
    authorIds: [],
  })

  const handleFileChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    if (currentTarget.files) {
      const files = currentTarget.files
      const reader = new FileReader()
      if (files) {
        reader.readAsDataURL(files[0])
        setRequestCover(files[0])
        reader.onloadend = function () {
          const base64data = reader.result
          if (base64data) setCover(base64data as string)
        }
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const authorsData = await getAuthors().then((response) => {
        setAuthors(response.data)
      })
    }
    try {
      fetchData()
    } catch (error) {
      if (axios.isAxiosError(error)) console.log('nema autora')
    }
  }, [])

  const addBookHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({ formData })
    try {
      const form = new FormData()
      form.append('cover', setCover)
      form.append('description', formData.description)
      form.append('isbn', formData.isbn)
      form.append('publishDate', formData.publishDate)
      form.append('quantity', formData.quantity.toString())
      form.append('title', formData.title)
      // form.append('authorIds', formData.authorIds.map((author) => author.id).toString())
      formData.authorIds.forEach((author) => form.append('authorIds', author.id.toString()))

      const data = await postBookRequest(form)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          console.log('neautorizovan')
        }
      }
      return
    }
  }

  const onChangeAuthors = (newAuthors: MultiValue<Author>) => {
    console.log(newAuthors)
    setFormData((prev) => ({ ...prev, authorIds: newAuthors.map((authors) => authors) }))
  }

  return (
    <form className={styles['form-wrapper']} action='' onSubmit={addBookHandler}>
      <div className={styles['form-group']}>
        <label htmlFor='title'>title</label>
        <input
          type='text'
          id='title'
          name='title'
          defaultValue={formData.title}
          onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='description'>description</label>
        <input
          type='text'
          id='description'
          name='description'
          defaultValue={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='isbn'>isbn</label>
        <input
          id='isbn'
          name='isbn'
          type='text'
          defaultValue={formData.isbn}
          onChange={(e) => setFormData((prev) => ({ ...prev, isbn: e.target.value }))}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='quantity'>quantity</label>
        <input
          id='quantity'
          name='quantity'
          type='number'
          defaultValue={formData.quantity}
          onChange={(e) => setFormData((prev) => ({ ...prev, quantity: +e.target.value }))}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='cover'>cover</label>
        <input
          id='cover'
          name='cover'
          type='file'
          defaultValue={formData.cover}
          onChange={handleFileChange}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='publishDate'>publish date</label>
        <input
          id='publishDate'
          name='publishDate'
          type='date'
          defaultValue={formData.publishDate}
          onChange={(e) => setFormData((prev) => ({ ...prev, publishDate: e.target.value }))}
        />
      </div>

      <div className={styles['form-group']}>
        <label htmlFor='authorIds'>author</label>
        <Select
          name='authorIds'
          id='authorIds'
          options={authors}
          defaultValue={formData.authorIds}
          getOptionLabel={(option) => `${option.firstname} ${option.lastname}`}
          onChange={onChangeAuthors}
          isMulti={true}
          getOptionValue={(option: Author) => option.id.toString()}
        />
      </div>
      <button className={styles['form-submit-btn']}>Submit Book</button>
    </form>
  )
}

export default ManageBookForm
