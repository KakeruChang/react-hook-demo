import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { fireauth } from '../api/firebase'

import '../scss/login.scss'

const Login = props => {
  const { location, history, auth } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logInError, setLogInError] = useState('')
  const { from } = location.state || { from: { pathname: '/mypage' } }

  const onChangeHandler = event => {
    switch (event.target.id) {
      case 'inputEmail':
        setEmail(event.target.value)
        break
      case 'inputPassword':
        setPassword(event.target.value)
        break
      default:
        break
    }
  }

  const login = event => {
    event.preventDefault()
    fireauth
      .signInWithEmailAndPassword(email, password)
      .then()
      .catch(() => {
        setLogInError('ログインIDまたはパスワードが違います')
        setEmail('')
        setPassword('')
        setTimeout(() => {
          setLogInError('')
        }, 5000)
      })
  }

  useEffect(() => {
    if (auth) {
      history.push(from.pathname)
    }
    // eslint-disable-next-line
  }, [auth])

  return (
    <div className='container'>
      <div className='border border-primary rounded'>
        <div className='lm-title border-primary m-3'>ログイン</div>
        {logInError && (
          <div className='alert alert-danger m-3' role='alert'>
            {logInError}
          </div>
        )}
        <form>
          <div className='row login-form-wrap'>
            <div className='col-md-9 col-12 row pr-0'>
              <div className='form-group col-12 row pr-0'>
                <div className='col-md-3 col-12 col-form-label'>ログインID</div>
                <div className='col-md-9 col-12 pr-0'>
                  <input
                    type='email'
                    value={email}
                    className='form-control'
                    id='inputEmail'
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div className='form-group col-12 row pr-0'>
                <div className='col-md-3 col-12 col-form-label'>パスワード</div>
                <div className='col-md-9 col-12 pr-0'>
                  <input
                    type='password'
                    value={password}
                    className='form-control'
                    id='inputPassword'
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-3 col-12 row pr-0'>
              <div className='form-group col-12 row pr-0'>
                <div className='col-12 pr-0'>
                  <button
                    onClick={event => {
                      return login(event)
                    }}
                    type='submit'
                    className='btn btn-primary h-100 w-100'
                  >
                    ログイン
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-9 col-12 row justify-content-end'>
              <div className='col-md-9 col-12'>
                <div className='login-note'>
                  <span>パスワードを忘れた方は</span>
                  <Link to='/'>こちら</Link>
                </div>
                <div className='login-note'>
                  <span>会員登録のみを行う場合は</span>
                  <Link to='/'>こちら</Link>
                  <span>(会員登録では招待コードの発行が可能です)</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  auth: PropTypes.objectOf(PropTypes.any)
}
Login.defaultProps = {
  auth: null
}

export default Login
