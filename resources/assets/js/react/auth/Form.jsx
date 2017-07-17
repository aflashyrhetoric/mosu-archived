import React, {Component} from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: true
    }
  }

  toggleSignUpAndLogin(){
  	var toggle = !this.state.newUser;
  	this.setState({ newUser: toggle });
  }

  handleUserSignup(newUser){
    $.ajax({
        url: '/api/v1/signup',
        dataType: 'json',
        type: 'POST',
        data: newUser,
        // Token gets sent. Blank ? Signup : Main
        beforeSend: function (xhr) {
          var authHeaderText = "Bearer " + localStorage.getItem('api_token');
          xhr.setRequestHeader('Authorization', authHeaderText);
        },
        success: function(data) {
            // Set false so login renders
            this.setState({ newUser: false });
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
  handleUserLogin(loginInfo){
    // console.log(loginInfo);
    $.ajax({
        url: '/api/v1/login',
        dataType: 'json',
        type: 'POST',
        data: loginInfo,
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
  	var formToBeUsed;
    var headingToBeUsed;
  	var prompt;
  	if(this.state.newUser){
      formToBeUsed = <Login handleUserLogin={this.handleUserLogin} />;
      headingToBeUsed = "Login";
      prompt = ["New to Mosu?", "Sign Up"];
  	} else {
      formToBeUsed = <SignUp handleUserSignup={this.handleUserSignup} />;
      headingToBeUsed = "Welcome To Mosu!";
      prompt = ["Already a user?", "Login"];
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

export default Form;