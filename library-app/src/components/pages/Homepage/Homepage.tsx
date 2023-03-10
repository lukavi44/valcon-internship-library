import React from 'react'
import BooksList from '../../Books/BooksList/BooksList'
import MainLayout from '../../Layout/MainLayout'

const Homepage = () => {
  return (
    <React.Fragment>
      <MainLayout>
        <BooksList />
      </MainLayout>
    </React.Fragment>
  )
}

export default Homepage
