import Offline from 'offline-plugin/runtime'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { store, history } from './store'

import App from './components/App'

if (process.env.NODE_ENV === 'production') Offline.install()

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App history={history} />
    </BrowserRouter>
  </Provider>
)

if (!module.hot) render(<Root />, document.querySelector('react'))
