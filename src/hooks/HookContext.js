import React, { useReducer } from 'react'
import { createContext } from 'react'

import { useIsLoggedIn } from '../hooks/useIsLoggedIn'
import initData from '../data/data'

export const HooksContext = createContext()

// reducer
export const UPDATE_POST = 'UPDATE_POST'
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return action
    default:
      return state
  }
}

export const Linksmate = props => {
  const { children } = props
  const user = useIsLoggedIn()
  const [data, dispatch] = useReducer(reducer, {
    user: initData.user
  })

  return (
    // <RubyContext.Provider value={{ postData, dispatch }}>
    <HooksContext.Provider value={{ user, data, dispatch }}>
      {children}
    </HooksContext.Provider>
  )
}
