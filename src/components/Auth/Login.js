import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../../actions/common'

import { FormTitle, FooterLink } from '../Styled'
import Form from './Form'

const Login = ({ user, login }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { username: { value: username }, password: { value: password } } = e.target
    login({ username, password })
  }

  return (
    <div>
      <FormTitle>Login</FormTitle>
      <Form onSubmit={handleSubmit} />
      <FooterLink to="/signup">{'You don\'t have an account ?'}</FooterLink>
      {user.id && <Redirect to="/" />}
    </div>
  )
}

Login.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
  login: React.PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { login })(Login)
