import { call, put, takeEvery } from 'redux-saga/effects'

import { findUser } from '../api/firebase'

export const UPDATE_USER = 'UPDATE_USER'
export const updateUser = user => {
  return {
    type: UPDATE_USER,
    payload: {
      user
    }
  }
}

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN'

export const fetchDataBegin = email => {
  return {
    type: FETCH_DATA_BEGIN,
    payload: {
      email
    }
  }
}

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

const fetchDataSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      user: data.user
    }
  }
}

function* fetchData(action) {
  const { email } = action.payload
  // 使用 data 接收請求的資料
  const data = yield call(() => {
    return findUser(email)
  })
  yield put(fetchDataSuccess(data[0]))
}

export function* fireSaga() {
  yield takeEvery(FETCH_DATA_BEGIN, fetchData)
}
