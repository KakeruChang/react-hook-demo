import { useState, useEffect } from 'react'
import { fireauth } from '../constants/firebase'

export const useIsLoggined = (initialValue = null) => {
  const [isLoggined, setIsLoggined] = useState(initialValue)

  useEffect(() => {
    // function handleStatusChange(status) {
    //   setIsLoggined(status.isOnline)
    // }
    // const handleStatusChange=(user)=>{
    //   console.log(user)
    //   // setIsLoggined(user)
    // }

    fireauth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggined(user)
      } else {
        setIsLoggined(false)
      }
    })

    // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    // return () => {
    //   ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    // };
  })

  return isLoggined
}
