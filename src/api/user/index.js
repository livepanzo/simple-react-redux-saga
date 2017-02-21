import { API } from '../urls'
import { post, get } from '../../utils'


// export const AUTH_USER = `${API}/authenticate`
// export const FETCH_USER = `${API}/account`


// export const authenticate = data => post(AUTH_USER, data).then(
//     (response) => {
//       if (response.headers.get('cookie') === null) throw Error('no token')
//       return response.headers.get('cookie')
//     },
//   )

// export const fetchingUser = () => get(FETCH_USER)

export const authenticate = data => Promise.resolve(data).then(res => res)

export const fetchingUser = () => Promise.resolve({ name: 'user1', id: 1 }).then(res => res)
