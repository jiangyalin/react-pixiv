import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function fetchPostsApi(url) {
  return fetch(`https://api.github.com/users`)
    .then(response => response.json() )
}

export function* incrementAsync() {
  yield delay(1000)
  const posts = yield call(fetchPostsApi)
  console.log(posts)
  yield put({ type: 'INCREMENT' })
}

export function* aa() {
  yield takeEvery('ILLUSTRATION_BOX_SET_IMG_SIZE', incrementAsync)
}