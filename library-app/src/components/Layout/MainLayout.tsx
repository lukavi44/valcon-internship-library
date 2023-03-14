import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from '../../router/PrivateRoutes'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import BookDetails from '../pages/BookDetails/BooksDetails'
import Homepage from '../pages/Homepage/Homepage'
import Login from '../pages/Login/Login'
import Sidebar from '../Sidebar/Sidebar'
import styles from './MainLayout.module.css'

const MainLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [accessToken, setAccessToken] = useState('')
  const [showHeader, setIsHeaderShowing] = useState(true)
  const [searchTermValue, setSearchTermValue] = useState('')

  // const token = getAccessToken()

  // useEffect(() => {
  //   return setAccessToken(token)
  // }, [])

  // useEffect(() => {
  //   console.log('triger useeffect searchterm')
  //   const debounceTimeout = setTimeout(() => {
  //     search()
  //   }, 500)
  //   return () => {
  //     clearTimeout(debounceTimeout)
  //   }
  // }, [searchTermValue])

  // useEffect(() => {
  //   if (accessToken !== '') {
  //     setIsLoggedIn(true)
  //   } else {
  //     setIsLoggedIn(false)
  //   }
  //   console.log(isLoggedIn)
  // }, [])
  const currentPathName = window.location.pathname

  useEffect(() => {
    if (currentPathName === '/login') {
      setIsHeaderShowing(false)
    }
  }, [])

  function search() {
    console.log(`Searching for ${searchTermValue}...`)
  }

  return (
    <div className={styles.wrapp}>
      <Sidebar isLoggedIn={isLoggedIn} />
      <div className={styles['inside-wrapp']}>
        <div className={styles.bckgrnd}></div>
        {showHeader && (
          <Header
            searchTermValue={searchTermValue}
            setSearchTermValue={setSearchTermValue}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
        <Routes>
          <Route element={<PrivateRoutes accessToken={accessToken} />}>
            <Route path='details' element={<BookDetails />} />
          </Route>
          <Route path='/' element={<Homepage />} />
          <Route
            path='login'
            element={<Login setIsLoggedIn={setIsLoggedIn} setAccessToken={setAccessToken} />}
          />
        </Routes>
      </div>
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default MainLayout
