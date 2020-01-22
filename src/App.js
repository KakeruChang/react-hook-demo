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

function App(props) {
  const sharedContext = { user: useIsLoggined() }

  return (
    <HookContext.Provider value={sharedContext}>
      <>
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
