import { call, put } from 'redux-saga/effects'
import { fetchUser } from '../../auth'
import { fetchingUser, authenticate } from '../../../api/user'
import { login, loginSuccses } from '../../../actions/common'


describe('fetch User saga test', () => {
  const gen = fetchUser(login)

  test('Get auth token', () => {
    expect(gen.next().value)
    .toEqual((call(authenticate, login.data)))
  })

  test('Fetch user', () => {
    expect(gen.next().value)
    .toEqual((call(fetchingUser)))
  })

  test('Received user and success', () => {
    expect(gen.next().value)
    .toEqual((put(loginSuccses())))
    expect(gen.next().done).toEqual(true)
  })
})
