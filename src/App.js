import React from 'react'
import { renderRoutes } from 'react-router-config'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/src/index'

// import logo from "./logo.svg";
import routes from './routes/routes'
import './scss/common.scss'
import './App.css'
import HookContext from './hooks/HookContext'
import { useIsActive } from './hooks/useIsActive'
// import navBarContext from './hooks/navBarContext'

import Navbar from './components/Navbar'
import TopMenu from './components/TopMenu'

function App() {
  const sharedContext = useIsActive()

  return (
    <HookContext.Provider value={sharedContext}>
      <div>
        <Navbar />
        <div className='top-menu-lg'>
          <TopMenu />
        </div>
        {renderRoutes(routes)}
      </div>
    </HookContext.Provider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}

export default App
