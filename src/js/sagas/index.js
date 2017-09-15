import { fork } from 'redux-saga/effects'

import { aa, watchToolbar } from './toolbar'

export default function* rootSaga() {
  yield [
    fork(aa),
    fork(watchToolbar)
  ]
}