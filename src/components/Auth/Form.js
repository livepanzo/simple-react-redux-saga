import React from 'react'

import { TextField, Submit } from '../Styled'

const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <TextField
      type="text"
      name="username"
      placeholder="Email address"
      title="Enter your email address"
      required
    />
    <TextField
      type="password"
      name="password"
      placeholder="Password"
      title="Type a strong password: aBC_123^"
      required
    />
    <Submit type="submit" value="Continue" />
  </form>
)

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
}

export default Form
