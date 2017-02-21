import { createStore, compose, applyMiddleware } from 'redux'
import throttle from 'lodash/throttle'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import rootReducer from './reducers'
// import { loginWithToken } from './actions/common'
import { saveState, loadState, logger } from './utils'
import rootSaga from './sagas'


export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  connectRouter(history)(rootReducer),
  loadState(),
  compose(
    applyMiddleware(
      sagaMiddleware,
      logger,
      routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
)

sagaMiddleware.run(rootSaga)
// store.dispatch(loginWithToken())
store.subscribe(throttle(() => saveState(store.getState()), 1000))

