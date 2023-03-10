import Homepage from './components/pages/Homepage/Homepage'
import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/pages/Login/Login'
import React, { useEffect, useState } from 'react'
import PrivateRoutes from './router/PrivateRoutes'
import BookDetails from './components/pages/BookDetails'

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'))
  const token = localStorage.getItem('accessToken')
  useEffect(() => {
    return setAccessToken(token)
  }, [])

  return (
    <div className={styles['app-wrapper']}>
      <Routes>
        <Route element={<PrivateRoutes accessToken={accessToken} />}>
          <Route path='details' element={<BookDetails />} />
        </Route>
        <Route path='/' element={<Homepage />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
