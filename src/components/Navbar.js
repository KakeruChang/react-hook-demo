import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal, faUser } from '@fortawesome/free-solid-svg-icons'
import { fireauth } from '../constants/firebase'
import classNames from 'classnames'

import HookContext from '../hooks/HookContext'
import logo from '../assets/icon_logo.png'
import logoTest from '../assets/hdr_btn_order2.png'
import '../scss/Navbar.scss'
import '../scss/common.scss'
import TopMenu from './TopMenu'
import constants from '../constants/constants'

const Navbar = props => {
  console.log(props.path)
  // const { isActive, setActive } = useContext(HookContext)[0]
  const [isActive, setActive] = useState(constants.navBar[0])
  const isLoggined = useContext(HookContext).user

  const logout = () => {
    fireauth
      .signOut()
      .then(() => console.log('log out success'))
      .catch(error => console.log(error))
  }
  const activateNav = () => {
    switch (props.path) {
      case '/':
        setActive(constants.navBar[0])
        break
      case '/mypage':
        setActive(constants.navBar[1])
        break
      default:
        setActive('')
        break
    }
  }

  useEffect(() => {
    activateNav()
    // eslint-disable-next-line
  }, [props.path])

  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <img src={logo} alt='logo' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            {/* <li
              className={`nav-item ${
                isActive === constants.navBar[0]
                  ? 'border-primary border-bottom'
                  : ''
              }`}
            > */}
            <li
              className={classNames('nav-item', {
                'border-primary border-bottom': isActive === constants.navBar[0]
              })}
            >
              {/* <Link
                to='/'
                className='nav-link'
                onClick={() => setActive(constants.navBar[0])}
              > */}
              <Link
                to='/'
                className='nav-link'
                onClick={() => setActive(constants.navBar[0])}
              >
                <FontAwesomeIcon icon={faSignal} size='1x' />
                <span className='px-2'>はじめてガイド</span>
              </Link>
            </li>
            <li
              className={classNames('nav-item', {
                'border-primary border-bottom': isActive === constants.navBar[1]
              })}
            >
              {/* <Link
                to='#'
                className='nav-link'
                onClick={() => setActive(constants.navBar[1])}
              > */}
              <Link
                to='/mypage'
                className={classNames('nav-link', {
                  'text-success': isLoggined
                })}
                onClick={() => {
                  setActive(constants.navBar[1])
                }}
              >
                <FontAwesomeIcon icon={faUser} size='1x' />
                <span className='px-2'>
                  マイページ
                  {/* （{!isLoggined ? 'not logged in' : isLoggined.email}） */}
                </span>
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
          <div className='top-menu-md'>
            <TopMenu />
          </div>
          <Link to='/' onClick={logout}>
            <img src={logoTest} className='App-logo-test' alt='logo' />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
