import React, {Component} from 'react';
import Alert from './../utils/Alert.jsx';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          password: '',
          error: '',
          loading: false
      };
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value});
    }

    submitSignUpForm(e){
        e.preventDefault();
        // "Processing"
        this.setState({ loading: true });
        // Trim user inputs
        var name = this.state.name.trim();
        var email = this.state.email.trim();
        var password = this.state.password;

        // Super basic validation
        if (!name || !email || !password) {
            this.setState({ error: "Input wasn't valid. Please try again." });
            return;
        }

        // Call user signup handler on Form.js
        this.props.handleUserSignup({
            name: name,
            email: email,
            password: password
        });

    }

    render() {
    var errorBox;
    if(this.state.error){
        errorBox = <Alert 
                       type="danger" 
                       emphasisText="Input invalid." 
                       text="Please check messages and try again."
                   />;
    } else {
        errorBox = '';
    }
    return (
        <form onSubmit={ this.submitSignUpForm} >
            {/* Conditionally display error messages */}
            { errorBox }
            <fieldset className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                value={this.state.name}
                onChange={this.handleNameChange}
                className="form-control" type="text" id="name"/>
            </fieldset>
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
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form> 
    );
  }
}

export default SignUp;