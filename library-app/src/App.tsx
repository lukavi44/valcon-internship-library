import Homepage from './components/pages/Homepage/Homepage'
import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/pages/Login/Login'
import { useState } from 'react'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken')) // it will be used for PrivateRoutes when implemented

  return (
    <div className={styles['app-wrapper']}>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='login' element={<Login setAccessToken={setAccessToken} />} />
      </Routes>
    </div>
  )
}

export default App
