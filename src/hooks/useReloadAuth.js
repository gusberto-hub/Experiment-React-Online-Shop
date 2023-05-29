import { useEffect } from 'react'
import useApiRequest from './useApiRequest.js'
import { useDispatch } from 'react-redux'
import { login_user, logout_user } from '../store/slices/userSlice.js'

const useReloadAuth = () => {
  const dispatch = useDispatch()
  const { sendRequest, error, isLoading } = useApiRequest()

  const accessToken = localStorage.getItem('accessToken')
  const username = localStorage.getItem('username')

  if (!error) {
    dispatch(login_user({ user: { username }, access: accessToken }))
  } else {
    dispatch(logout_user())
    localStorage.clear()
  }

  useEffect(() => {
    if (accessToken)
      sendRequest('post', 'auth/token/verify/', {
        token: accessToken,
      })
  }, [accessToken])

  return { isLoading }
}

export default useReloadAuth
