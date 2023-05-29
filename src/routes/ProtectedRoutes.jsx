import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoutesValidator = () => {
  const location = useLocation()
  const token = useSelector((state) => state.user).access_token

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }
  return <Outlet />
}

export default ProtectedRoutesValidator
