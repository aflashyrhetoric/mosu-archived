// Form.jsx
// Handles toggling of modal
// Auth container component

import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: true
    }
  }

  toggleSignUpAndLogin() {
  	let toggle = !this.state.newUser;
  	this.setState({ newUser: toggle });
  }
  
  handleUserSignup(newUser) {
    $.ajax({
        url: '/api/v1/signup',
        dataType: 'json',
        type: 'POST',
        data: newUser,
        // Token gets sent. Blank ? Signup : Main
        beforeSend (xhr) {
          let authHeaderText = "Bearer " + localStorage.getItem('api_token');
          xhr.setRequestHeader('Authorization', authHeaderText);
        },
        success: function(data) {
            // Set false so login renders
            this.setState({ 'newUser': false });
        },
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        },
        complete: function() {
            this.setState({loading: false});
            // Refresh the page
            window.location.href = "/";
        }
    });
  }
  handleUserLogin(loginInfo) {
    // console.log(loginInfo);
    $.ajax({
        "url": '/api/v1/login',
        "dataType": 'json',
        "type": 'POST',
        "data": loginInfo,
        success: function(data) {
          // Save api_key data to localStorage
          localStorage.setItem('api_token', data);
          
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this),
        complete: function() {
            this.setState({loading: false});
            // Refresh the page
            window.location.href = "/";
        }.bind(this)
    });
  }
  
  render() {
    let formToBeUsed = '';
    let headingToBeUsed = '';
    let prompt = '';

  	if( this.state.newUser ) {
      let formToBeUsed = <Login handleUserLogin={this.handleUserLogin} />;
      let headingToBeUsed = 'Login';
      let prompt = ["New to Mosu?", "Sign Up"];
  	} else {
      console.log("Nothing")
    }
    
    return (
			<div className="
        col-xs-12 
        col-md-5 
        col-lg-3 col-lg-offset-3
        container__introduction-right
        tac">
        <h1 className="heading__join"> 
          { headingToBeUsed } 
        </h1>
			  <div className="auth-signup">
  			  { formToBeUsed }
			  </div>
			  <br/>
				<p>
					{ prompt[0] +" "}
					<a onClick={this.toggleSignUpAndLogin} 
					href="#">{ prompt[1] }</a></p>
			</div>
    );
  }
}