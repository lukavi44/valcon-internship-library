import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react'
import { postBookRequest } from '../../../services/BooksServices'
import styles from './ManageBookForm.module.css'
import Select, { MultiValue } from 'react-select'
import Author from '../../../models/author.model'
import getAuthors from '../../../services/AuthorServices'
import placeholder from '../../../assets/placeholderImg/placeholder.jpeg'
import { BookBodyData } from '../../../models/bookData.model'

const ManageBookForm = () => {
  const [authors, setAuthors] = useState<Author[]>([])
  const [requestCover, setRequestCover] = useState<Blob>(new Blob())
  const [cover, setCover] = useState('')
  const [formData, setFormData] = useState<BookBodyData>({
    Id: 0,
    Title: '',
    Description: '',
    Isbn: '',
    Quantity: 0,
    Cover: requestCover,
    PublishDate: '',
    AuthorIds: [],
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
      await getAuthors().then((response) => {
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
      form.append('Cover', requestCover)
      form.append('Description', formData.Description)
      form.append('Isbn', formData.Isbn)
      form.append('PublishDate', formData.PublishDate)
      form.append('Quantity', formData.Quantity.toString())
      form.append('Title', formData.Title)
      formData.AuthorIds.forEach((author) => form.append('authorIds', author.Id.toString()))

      await postBookRequest(form)
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
      <div className={styles['form-group-column']}>
        <img style={{ height: 100 }} src={cover ? cover : placeholder} alt='' />
        <input id='cover' name='cover' type='file' onChange={handleFileChange} />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='title'>Set Title</label>
        <input
          type='text'
          id='title'
          name='title'
          defaultValue={formData.Title}
          onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='description'>Add Description</label>
        <input
          type='text'
          id='description'
          name='description'
          defaultValue={formData.Description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='isbn'>ISBN</label>
        <input
          id='isbn'
          name='isbn'
          type='text'
          defaultValue={formData.Isbn}
          onChange={(e) => setFormData((prev) => ({ ...prev, isbn: e.target.value }))}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='quantity'>Quantity</label>
        <input
          id='quantity'
          name='quantity'
          type='number'
          defaultValue={formData.Quantity}
          onChange={(e) => setFormData((prev) => ({ ...prev, quantity: +e.target.value }))}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='publishDate'>Publish Date</label>
        <input
          id='publishDate'
          name='publishDate'
          type='date'
          defaultValue={formData.PublishDate}
          onChange={(e) => setFormData((prev) => ({ ...prev, publishDate: e.target.value }))}
        />
      </div>

      <div className={styles['form-group']}>
        <label htmlFor='authorIds'>Author(s)</label>
        <Select
          className={styles['select-authors-dropdown']}
          name='authorIds'
          id='authorIds'
          options={authors}
          defaultValue={formData.AuthorIds}
          getOptionLabel={(option) => `${option.FirstName} ${option.LastName}`}
          onChange={onChangeAuthors}
          isMulti={true}
          getOptionValue={(option: Author) => option.Id.toString()}
        />
      </div>
      <button className={styles['form-submit-btn']}>Submit Book</button>
    </form>
  )
}

export default ManageBookForm
