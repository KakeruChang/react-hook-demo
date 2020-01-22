import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { fireauth } from '../constants/firebase'

import '../scss/login.scss'
import '../scss/common.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  const login = () => {
    fireauth
      .signInWithEmailAndPassword(email, password)
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return (
    <div className='container'>
      <div className='border border-primary rounded'>
        <div className='lm-title border-primary m-3'>ログイン</div>
        <form>
          <div className='row login-form-wrap'>
            <div className='col-md-9 col-12 row pr-0'>
              <div className='form-group col-12 row pr-0'>
                <label
                  htmlFor='inputEmail3'
                  className='col-md-3 col-12 col-form-label'
                >
                  ログインID
                </label>
                <div className='col-md-9 col-12 pr-0'>
                  <input
                    type='email'
                    className='form-control'
                    id='inputEmail'
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div className='form-group col-12 row pr-0'>
                <label
                  htmlFor='inputPassword3'
                  className='col-md-3 col-12 col-form-label'
                >
                  パスワード
                </label>
                <div className='col-md-9 col-12 pr-0'>
                  <input
                    type='password'
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
                  <Link to='/'>
                    <button
                      onClick={() => login()}
                      type='submit'
                      className='btn btn-primary h-100 w-100'
                    >
                      ログイン
                    </button>
                  </Link>
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

export default Login
