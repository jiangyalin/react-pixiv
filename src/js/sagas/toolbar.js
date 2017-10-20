import { put, call, take, fork } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import { init } from '../actions/Toolbar';

function fetchToolbarApi(url) {
  return fetch(url)
    .then(response => response.json())
}

export function* incrementAsync() {
  const posts = yield call(fetchToolbarApi, `http://localhost:8082/user/user-info/findUserInfo?id=59bb6cd41767ff7f44844da2`);
  yield put(init(posts))
}

export function* aa() {
  // yield takeEvery('ILLUSTRATION_BOX_SET_IMG_SIZE', incrementAsync)
}

export function* watchToolbar() {
  while( yield take('TOOLBAR_DATA') ){
    yield fork(incrementAsync)
  }
}