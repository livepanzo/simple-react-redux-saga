import { call, put, takeLatest } from 'redux-saga/effects'
import { LOGIN_REQUEST } from '../constants'
import { loginFailure, loginSuccses } from '../actions/common'
import { authenticate, fetchingUser } from '../api/user'

export function* fetchUser(action) {
  try {
    const token = yield call(authenticate, action.data)
    document.cookie = token
    const user = yield call(fetchingUser)
    yield put(loginSuccses(user))
  } catch (e) {
    yield put(loginFailure(e))
  }
}

function* auth() {
  yield takeLatest(LOGIN_REQUEST, fetchUser)
}

export default auth

