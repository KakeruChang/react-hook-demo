import React from 'react'
// import { renderRoutes } from 'react-router-config'
import renderRoutesWithAuth from './router/renderRoutesWithAuth'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/src/index'

// import logo from "./logo.svg";
import routes from './router/routes'
import './scss/common.scss'
import './App.css'
import HookContext from './hooks/HookContext'
import { useIsLoggedIn } from './hooks/useIsLoggedIn'

import Navbar from './components/Navbar'
import TopMenu from './components/TopMenu'
import OwnershipAnnouncement from './components/OwnershipAnnouncement'

import { withRouter } from 'react-router-dom'

function App(props) {
  const sharedContext = { user: useIsLoggedIn() }
  const path = props.location.pathname

  return (
    <HookContext.Provider value={sharedContext}>
      {path.indexOf('/order') === -1 && (
        <>
          <Navbar path={path} />
          <div className='top-menu-lg'>
            <TopMenu />
          </div>
        </>
      )}
      {/* {renderRoutes(routes, { isLoggedIn: useIsLoggedIn() })} */}
      {renderRoutesWithAuth(routes, useIsLoggedIn())}
      <OwnershipAnnouncement />
    </HookContext.Provider>
  )
}

export default withRouter(App)
// export default App
