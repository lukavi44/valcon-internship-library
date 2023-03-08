import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
  const auth = { accessToken: true }
  return auth.accessToken ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes
