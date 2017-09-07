import { fork } from 'redux-saga/effects'

import { aa } from './posts'

export default function* rootSaga() {
  yield [
    fork(aa)
  ]
}