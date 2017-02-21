import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_WITH_TOKEN_REQUEST, SIGNUP_REQUEST } from '../../constants'


export const login = ({ username, password }) => ({
  type: LOGIN_REQUEST,
  data: { username, password },
})

export const loginSuccses = user => ({
  type: LOGIN_SUCCESS,
  data: user,
})

export const loginFailure = err => ({
  type: LOGIN_FAILURE,
  message: err.message,
})

export const loginWithToken = () => ({
  type: LOGIN_WITH_TOKEN_REQUEST,
})

export const signup = ({ username, password }) => ({
  type: SIGNUP_REQUEST,
  data: { username, password },
})
