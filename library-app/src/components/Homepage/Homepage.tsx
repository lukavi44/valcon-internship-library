import React from 'react'
import BooksList from '../Books/BooksList/BooksList'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Card from '../UI/Card'
import styles from './Homepage.module.css'

const Homepage = () => {
  return (
    <React.Fragment>
      <Header />
      <BooksList />
      <Footer />
    </React.Fragment>
  )
}

export default Homepage
