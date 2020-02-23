import { useState, useEffect } from 'react'
import { fireauth } from '../api/firebase'

const useIsLoggedIn = (initialValue = {}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialValue)

  useEffect(() => {
    fireauth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(user)
      } else {
        setIsLoggedIn(null)
      }
    })
  })

  return isLoggedIn
}
export default useIsLoggedIn
