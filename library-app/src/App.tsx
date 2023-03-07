import Homepage from './components/pages/Homepage/Homepage'
import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/pages/Login/Login'

function App() {
  return (
    <div className={styles.wrapp}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
