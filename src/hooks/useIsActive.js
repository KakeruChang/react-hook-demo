import { useState } from 'react'
import constants from '../constants'

export const useIsActive = (initialValue = constants.navBar[0]) => {
  const [isActive, setActive] = useState(initialValue)

  return { isActive, setActive }
}
