import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Async from 'react-code-splitting'
import { ConnectedRouter } from 'connected-react-router'

import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Header from './Header'
import { Body } from './Styled'

const Home = () => <Async load={import('./Home')} />

const App = ({ history, user }) => (
  <ConnectedRouter history={history}>
  <Body>
    <Header />
    {user.id ? <Route path="/" component={Home} /> : <Redirect to="/login" />}
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </Body>
  </ConnectedRouter>
)

App.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(App)
