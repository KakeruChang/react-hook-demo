import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/src/index'

// import logo from "./logo.svg";
import renderRoutesWithAuth from './router/renderRoutesWithAuth'
import routes from './router/routes'
import './scss/common.scss'
import useIsLoggedIn from './hooks/useIsLoggedIn'
import Linksmate from './hooks/HookContext'
import Navbar from './components/Navbar'
import TopMenu from './components/TopMenu'
import OwnershipAnnouncement from './components/OwnershipAnnouncement'

function App(props) {
  const { location } = props
  const path = location.pathname

  return (
    <Linksmate>
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
    </Linksmate>
  )
}

App.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withRouter(App)
// export default App
