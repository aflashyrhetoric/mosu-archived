// Login.jsx
// Handles logic for login form
// Renders LoginForm

import React from 'react';
import Alert from './../utils/Alert';

export default class Login extends React.Component {
  constructor(props) {
      super(props);

      this.errorBox = '';

      this.state = {
        email: '',
        password: '',
        error: ''
      };
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  handleEmailChange(e) {
      this.setState({ email: e.target.value});
  }
  
  handlePasswordChange(e) {
      this.setState({ password: e.target.value});
  }
  
  submitLoginForm(e) {
    e.preventDefault();
    let email = this.state.email.trim();
    let password = this.state.password.trim();

    // Super basic validation
    if (!email || !password) {
        this.setState({ error: "Input wasn't valid. Please try again." });
        return;
    }

    // Call user login handler on Form.js
    this.props.handleUserLogin({
      email: email,
      password: password
    });

  }

  render() {
    let errorBox;
    if(this.state.error) {
        errorBox = <Alert 
                       type="danger" 
                       emphasisText="Input invalid." 
                       text="Please check messages and try again."
                   />;
    } else {
        errorBox = '';
    }
    return (
      <form onSubmit={ this.submitLoginForm } >
        {/* Conditionally display error messages */}
        { this.errorBox }
        <fieldset className="form-group">
          <label htmlFor="email">Email</label>
          <input 
          value={this.state.email}
          onChange={this.handleEmailChange}
          className="form-control" type="text" id="email"/>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password</label>
          <input 
          value={this.state.password}
          onChange={this.handlePasswordChange}
          className="form-control" type="password" id="password"/>
        </fieldset>
        <button type="submit" className="btn btn-primary">Login</button>
      </form> 
    );
  }
}