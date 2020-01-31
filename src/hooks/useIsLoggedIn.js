import { useState, useEffect } from 'react'
import { fireauth } from '../constants/firebase'

export const useIsLoggedIn = (initialValue = {}) => {
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
