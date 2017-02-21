import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants'

const user = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return action.data
    case LOGIN_FAILURE:
      return {}
    default:
      return state
  }
}

export default user
