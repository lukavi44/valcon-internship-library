import { Dispatch, SetStateAction } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../components/pages/Homepage/Homepage'
import Login from '../components/pages/Login/Login'
import PrivateRoutes from './PrivateRoutes'

interface RouterProps {
  accessToken: string | ''
  setAccessToken: Dispatch<SetStateAction<string | ''>>
}

const AppRouter = ({ accessToken, setAccessToken }: RouterProps) => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Homepage />}></Route>
      </Route>
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

export default AppRouter
