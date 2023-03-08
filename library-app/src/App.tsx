import Homepage from './components/pages/Homepage/Homepage'
import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/pages/Login/Login'
import PrivateRoutes from './utils/PrivateRoutes'

function App() {
  return (
    <div className={styles.wrapp}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Homepage />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
