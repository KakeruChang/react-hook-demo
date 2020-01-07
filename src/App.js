import React from 'react'
import { renderRoutes } from 'react-router-config'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/src/index'

// import logo from "./logo.svg";
import routes from './components/routes/routes'
import './scss/common.scss'
import './App.css'

import Navbar from './components/Navbar'
import TopMenu from './components/TopMenu'

function App() {
  return (
    <div>
      <Navbar />
      <div className='top-menu-lg'>
        <TopMenu />
      </div>
      <div className='container'>{renderRoutes(routes)}</div>
    </div>
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
