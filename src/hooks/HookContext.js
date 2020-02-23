import React, { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'

import useIsLoggedIn from './useIsLoggedIn'
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
    <HooksContext.Provider value={{ user, data, dispatch }}>
      {children}
    </HooksContext.Provider>
  )
}

Linksmate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired
}
