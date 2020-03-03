import { all } from 'redux-saga/effects'
import { fireSaga } from './firebaseAction'

function* rootSaga() {
  yield all([fireSaga()])
}

export default rootSaga
