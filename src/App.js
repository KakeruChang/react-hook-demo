import React from 'react'
import { renderRoutes } from 'react-router-config'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/src/index'

// import logo from "./logo.svg";
import routes from './routes'
import './scss/common.scss'
import './App.css'
import HookContext from './hooks/HookContext'
import { useIsLoggined } from './hooks/useIsLoggined'
// import navBarContext from './hooks/navBarContext'

import Navbar from './components/Navbar'
import TopMenu from './components/TopMenu'

import { withRouter } from 'react-router-dom'

// import { fireauth } from './constants/firebase'
// const checkTest = () => {
//   // const user = fireauth.currentUser
//   // if (user) {
//   //   // User is signed in.
//   //   console.log('User is signed in.')
//   //   console.log(user)
//   // } else {
//   //   // No user is signed in.
//   //   console.log('No user is signed in.')
//   // }
// }

function App(props) {
  const sharedContext = { user: useIsLoggined() }

  return (
    <HookContext.Provider value={sharedContext}>
      <>
        {/* <button onClick={checkTest}>check</button> */}
        <Navbar path={props.location.pathname} />
        <div className='top-menu-lg'>
          <TopMenu />
        </div>
        {renderRoutes(routes, { isLoggined: useIsLoggined() })}
      </>
    </HookContext.Provider>
  )
}

export default withRouter(App)
// export default App
