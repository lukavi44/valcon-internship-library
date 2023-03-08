import Homepage from './components/pages/Homepage/Homepage'
import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className={styles['app-wrapper']}>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App
