import { useState, useEffect } from 'react'
import { fireauth } from '../api/firebase'

const useIsLoggedIn = (initialValue = {}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialValue)

  useEffect(() => {
    let isMounted = true

    fireauth.onAuthStateChanged(user => {
      if (isMounted) {
        if (user) {
          setIsLoggedIn(user)
        } else {
          setIsLoggedIn(null)
        }
      }
    })

    return () => {
      isMounted = false
    }
  })

  return isLoggedIn
}
export default useIsLoggedIn
