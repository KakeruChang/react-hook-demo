import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { useWindowSize } from '../../hooks/useWindowSize'
import { findUser } from '../../api/firebase'
import NecessaryInput from '../common/NecessaryInput'

const InformationInput = props => {
  const { history, apply } = props
  const [accountIsExist, setAccountIsExist] = useState('')
  const [empty, setEmpty] = useState([])
  const windowSize = useWindowSize()

  const checkEmpty = () => {
    let checkResult = []
    if (!apply.info.firstname) {
      checkResult.push('ご契約者名-苗字')
    }
    if (!apply.info.lastname) {
      checkResult.push('ご契約者名-名前')
    }
    if (!apply.info.birthYear) {
      checkResult.push('生年月日-年')
    }
    if (!apply.info.birthMonth) {
      checkResult.push('生年月日-月')
    }
    if (!apply.info.birthDay) {
      checkResult.push('生年月日-日')
    }
    if (!apply.info.sex) {
      checkResult.push('性別')
    }
    if (!apply.info.address) {
      checkResult.push('住所')
    }
    if (!apply.info.phone) {
      checkResult.push('電話番号')
    }
    if (!apply.info.email) {
      checkResult.push('メールアドレス')
    }
    if (!apply.info.password) {
      checkResult.push('パスワード')
    }
    setEmpty(checkResult)
  }

  const goToCheckOrder = () => {
    if (empty.length === 0 && !accountIsExist) {
      history.push('/order/checkorder')
    }
  }

  const onChangeHandler = event => {
    const name = event.target.name
    const originData = { ...apply.info }
    const applyCopy = { ...apply }

    originData[name] = event.target.value
    applyCopy.info = originData
    props.setApply(applyCopy)
  }

  const checkExist = async () => {
    const result = await findUser(apply.info.email)

    if (result[0]) {
      setAccountIsExist('もう使用されたメールアドレスです！')
    } else {
      setAccountIsExist('')
    }
  }

  useEffect(() => {
    checkEmpty()
    // eslint-disable-next-line
  }, [apply])

  return (
    <div>
      <div className='bg-dark'>
        <div className='container'>
          <div className='h5 py-2 my-3 font-weight-bold text-light'>
            ◆ 基本登録情報
          </div>
        </div>
      </div>
      <div
        className={classNames({
          container: windowSize.width >= 768
        })}
      >
        <form>
          {/* name */}
          <div className='form-group row'>
            <label
              htmlFor='inputFirstname'
              className={classNames(
                'col-md-3 col-12 col-form-label',
                {
                  'bg-sky-blue mb-3': windowSize.width < 768
                },
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 }
              )}
            >
              ご契約者名
            </label>
            <div
              className={classNames(
                'col-md-3 col-6',
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 },
                { 'pr-1': windowSize.width < 768 }
              )}
            >
              <input
                type='text'
                className='form-control'
                id='inputFirstname'
                name='firstname'
                value={apply.info.firstname}
                onChange={onChangeHandler}
              />
            </div>
            <div
              className={classNames(
                'col-md-3 col-6',
                { 'pr-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pr-4': windowSize.width < 576 },
                { 'pl-1': windowSize.width < 768 }
              )}
            >
              <input
                type='text'
                className='form-control'
                id='inputLastname'
                name='lastname'
                value={apply.info.lastname}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          {/* birthday */}
          <div className='form-group row'>
            <label
              htmlFor='inputFirstname'
              className={classNames(
                'col-md-3 col-12 col-form-label',
                {
                  'bg-sky-blue mb-3': windowSize.width < 768
                },
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 }
              )}
            >
              生年月日
            </label>
            <div
              className={classNames(
                'col-md-3 col-4',
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 },
                { 'pr-1': windowSize.width < 768 }
              )}
            >
              <select
                className='form-control'
                defaultValue={apply.info.birthYear || 'default'}
                name='birthYear'
                onChange={onChangeHandler}
              >
                <option value='default' disabled>
                  年
                </option>
                <option value={2020}>2020</option>
                <option value={2019}>2019</option>
              </select>
            </div>
            <div
              className={classNames('col-md-3 col-4', {
                'px-1': windowSize.width < 768
              })}
            >
              <select
                className='form-control'
                defaultValue={apply.info.birthMonth || 'default'}
                name='birthMonth'
                onChange={onChangeHandler}
              >
                <option value='default' disabled>
                  月
                </option>
                <option value={11}>11</option>
                <option value={12}>12</option>
              </select>
            </div>
            <div
              className={classNames(
                'col-md-3 col-4',
                { 'pr-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pr-4': windowSize.width < 576 },
                { 'pl-1': windowSize.width < 768 }
              )}
            >
              <select
                className='form-control'
                defaultValue={apply.info.birthDay || 'default'}
                name='birthDay'
                onChange={onChangeHandler}
              >
                <option value='default' disabled>
                  日
                </option>
                <option value={28}>28</option>
                <option value={29}>29</option>
              </select>
            </div>
          </div>
          {/* sex */}
          <fieldset className='form-group'>
            <div className='row'>
              <legend
                className={classNames(
                  'col-md-3 col-12 col-form-label',
                  {
                    'bg-sky-blue mb-3': windowSize.width < 768
                  },
                  { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                  { 'pl-4': windowSize.width < 576 }
                )}
              >
                性別
              </legend>
              <div
                className={classNames('form-check col-md-3 col-4 pl-5', {
                  'ml-4': windowSize.width < 768 && windowSize.width >= 576
                })}
              >
                <input
                  className='form-check-input'
                  type='radio'
                  name='sex'
                  id='gridRadios1'
                  value='男'
                  onChange={onChangeHandler}
                  checked={apply.info.sex === '男'}
                />
                <label className='form-check-label' htmlFor='gridRadios1'>
                  男
                </label>
              </div>
              <div
                className={classNames(
                  'form-check col-md-3 col-4',
                  { 'pl-5': windowSize.width >= 768 },
                  { 'pl-4': windowSize.width < 768 }
                )}
              >
                <input
                  className='form-check-input'
                  type='radio'
                  name='sex'
                  id='gridRadios2'
                  value='女'
                  onChange={onChangeHandler}
                  checked={apply.info.sex === '女'}
                />
                <label className='form-check-label' htmlFor='gridRadios2'>
                  女
                </label>
              </div>
            </div>
          </fieldset>
          {/* address */}
          <div className='form-group row'>
            <label
              htmlFor='inputAddress'
              className={classNames(
                'col-md-3 col-12 col-form-label',
                {
                  'bg-sky-blue mb-3': windowSize.width < 768
                },
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 }
              )}
            >
              住所
            </label>
            <div
              className={classNames(
                'col-md-9 col-12',
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 },
                { 'pr-4': windowSize.width < 768 }
              )}
            >
              <input
                type='text'
                className='form-control'
                id='inputAddress'
                name='address'
                value={apply.info.address}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          {/* phone */}
          <div className='form-group row'>
            <label
              htmlFor='inputPhone'
              className={classNames(
                'col-md-3 col-12 col-form-label',
                {
                  'bg-sky-blue mb-3': windowSize.width < 768
                },
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 },
                { 'pr-1': windowSize.width < 768 }
              )}
            >
              電話番号
            </label>
            <div
              className={classNames(
                'col-md-3 col-6',
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 }
              )}
            >
              <input
                type='text'
                className='form-control'
                id='inputPhone'
                name='phone'
                value={apply.info.phone}
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </form>
      </div>
      <div className='bg-dark'>
        <div className='container'>
          <div className='h5 py-2 my-3 font-weight-bold text-light'>
            ◆ ログイン情報
          </div>
        </div>
      </div>
      <div
        className={classNames({
          container: windowSize.width >= 768
        })}
      >
        <form>
          <div className='form-group row'>
            <label
              htmlFor='inputEmail'
              className={classNames(
                'col-md-3 col-12 col-form-label',
                {
                  'bg-sky-blue mb-3': windowSize.width < 768
                },
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 },
                { 'pr-1': windowSize.width < 768 }
              )}
            >
              登録メールアドレス
            </label>
            <div
              className={classNames(
                'col-md-6 col-12',
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 },
                { 'pr-4': windowSize.width < 768 }
              )}
            >
              <input
                type='email'
                className='form-control'
                id='inputEmail'
                name='email'
                value={apply.info.email}
                onChange={onChangeHandler}
                onBlur={checkExist}
              />
              {accountIsExist && (
                <span className='text-danger font-weight-bolder'>
                  {accountIsExist}
                </span>
              )}
            </div>
          </div>
          <div className='form-group row'>
            <label
              htmlFor='inputPassword'
              className={classNames(
                'col-md-3 col-12 col-form-label',
                {
                  'bg-sky-blue mb-3': windowSize.width < 768
                },
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 },
                { 'pr-1': windowSize.width < 768 }
              )}
            >
              登録パスワード
            </label>
            <div
              className={classNames(
                'col-md-6 col-12',
                { 'pl-5': windowSize.width < 768 && windowSize.width >= 576 },
                { 'pl-4': windowSize.width < 576 },
                { 'pr-4': windowSize.width < 768 }
              )}
            >
              <input
                type='text'
                className='form-control'
                id='inputPassword'
                name='password'
                value={apply.info.password}
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </form>
      </div>
      <div className='container my-5'>
        {empty.length > 0 && <NecessaryInput inputs={empty} />}
      </div>
      <div className='container'>
        <div className='row justify-content-center my-3'>
          <div className='col-12'>
            <button
              type='button'
              className='btn btn-warning text-light w-100 py-2'
              onClick={goToCheckOrder}
            >
              <div className='h5'>次へ</div>
            </button>
          </div>
        </div>
        <div className='row justify-content-center my-3'>
          <div className='col-md-6 col-12'>
            <Link
              className='simu-area text-decoration-none w-100 py-2'
              to='/order/selectplan'
            >
              <div className='h5'>戻る</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformationInput
