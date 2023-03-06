import React from 'react'
import Header from './components/Header/Header'
import Homepage from './components/pages/Homepage/Homepage'
import styles from './App.module.css'
import Search from './components/Search/Search'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className={styles.wrapp}>
      <Header />
      <div className={styles['inside-wrapp']}>
        <Search />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
