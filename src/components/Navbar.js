import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal, faUser, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

import { fireauth } from '../api/firebase'
import { HooksContext } from '../hooks/HookContext'
import logo from '../assets/icon_logo.png'
import logoTest from '../assets/hdr_btn_order2.png'
import '../scss/Navbar.scss'
import TopMenu from './TopMenu'
import constants from '../data/constants'
import useWindowSize from '../hooks/useWindowSize'

const Navbar = props => {
  const [isActive, setActive] = useState(constants.navBar[0])
  const isLoggined = useContext(HooksContext).user
  const windowSize = useWindowSize()

  const logout = () => {
    fireauth
      .signOut()
      .then(() => {})
      .catch(() => {})
  }
  const logoutButton = () => {
    if (isLoggined) {
      return (
        <li className='nav-item'>
          <Link to='/' className='nav-link' onClick={logout}>
            <FontAwesomeIcon icon={faDoorOpen} size='1x' />
            <span
              className={classNames('px-2', {
                'font-15': windowSize.width < 330
              })}
            >
              ログアウト
            </span>
          </Link>
        </li>
      )
    }
    return false
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
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto row m-0'>
            <li
              className={classNames('nav-item', {
                'border-primary border-bottom': isActive === constants.navBar[0]
              })}
            >
              <Link
                to='/'
                className='nav-link'
                onClick={() => {
                  return setActive(constants.navBar[0])
                }}
              >
                <FontAwesomeIcon icon={faSignal} size='1x' />
                <span
                  className={classNames('px-2', {
                    'font-15': windowSize.width < 330
                  })}
                >
                  はじめてガイド
                </span>
              </Link>
            </li>
            <li
              className={classNames('nav-item', {
                'border-primary border-bottom': isActive === constants.navBar[1]
              })}
            >
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
                <span
                  className={classNames('px-2', {
                    'font-15': windowSize.width < 330
                  })}
                >
                  マイページ
                </span>
              </Link>
            </li>
            {logoutButton()}
          </ul>
          <div className='top-menu-md'>
            <TopMenu />
          </div>
          <Link to='/order'>
            <img src={logoTest} className='App-logo-test' alt='logo' />
          </Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  path: PropTypes.string.isRequired
}

export default Navbar
