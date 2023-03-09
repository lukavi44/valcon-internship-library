import { Navigate, Outlet } from 'react-router-dom'

interface PrivateRoutesPorps {
  accessToken: string | null
}

const PrivateRoutes = ({ accessToken }: PrivateRoutesPorps) => {
  return accessToken ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes
