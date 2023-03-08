import Homepage from './components/pages/Homepage/Homepage'
import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/pages/Login/Login'
import PrivateRoutes from './router/PrivateRoutes'
import { Dispatch, SetStateAction } from 'react'
import AppRouter from './router/AppRouter'

interface AppTokenProps {
  accessToken: string | ''
  setAccessToken: Dispatch<SetStateAction<string | ''>>
}

function App() {
  return (
    <div className={styles['app-wrapp']}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Homepage />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
      {/* <AppRouter> */}
    </div>
  )
}

export default App
