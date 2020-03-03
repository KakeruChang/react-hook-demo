import React from 'react'
// import React, { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import firebaseReducer from '../reducer/firebaseReducer'
import rootSaga from '../action/rootSaga'
// import useIsLoggedIn from './useIsLoggedIn'
// import initData from '../data/data'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  firebaseReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

// export const HooksContext = createContext()

// reducer
// export const UPDATE_POST = 'UPDATE_POST'
// const reducer = (state, action) => {
//   switch (action.type) {
//     case UPDATE_POST:
//       return action
//     default:
//       return state
//   }
// }

const Linksmate = props => {
  const { children } = props
  // const user = useIsLoggedIn()
  // const [data, dispatch] = useReducer(reducer, {
  //   user: initData.user
  // })

  return (
    <Provider store={store}>
      {/* <HooksContext.Provider value={{ data, dispatch }}> */}
      {/* <HooksContext.Provider value={{ user, data, dispatch }}> */}
      {children}
      {/* </HooksContext.Provider> */}
    </Provider>
  )
}

Linksmate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default Linksmate
