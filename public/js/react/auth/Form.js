App.Auth.Form = React.createClass({
  getInitialState: function(){
  	return {
  		newUser: true
  	}
  },
  toggleSignUpAndLogin: function(){
  	var toggle = !this.state.newUser;
  	this.setState({ newUser: toggle });
  },
  handleUserSignup: function(newUser){
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
  },
  handleUserLogin: function(loginInfo){
    // console.log(loginInfo);
    $.ajax({
        url: '/api/v1/login',
        dataType: 'json',
        type: 'POST',
        data: loginInfo,
        success: function(data) {
          // Save api_key data to localStorage
          localStorage.setItem('api_token', data);
          console.log(localStorage.getItem('api_token'));
            // if (typeof data.error !== 'undefined') {
            //     this.setState({error: data.error});
            // } else {
            //     this.setState({ data: data, ajaxError: null});
            // }
            // setTimeout(function() {
            //   window.location.href = "mosu.dev/app";
            // }, 2000);
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
  },
  render: function() {
  	var formToBeUsed;
  	var prompt;
  	if(this.state.newUser){
      formToBeUsed = <App.Auth.Login handleUserLogin={this.handleUserLogin} />;
      prompt = ["New to Mosu?", "Sign Up"];
  	} else {
      formToBeUsed = <App.Auth.SignUp handleUserSignup={this.handleUserSignup} />;
      prompt = ["Already a user?", "Login"];
  	}
    return (
		<div id="signup" className="container">
			<div className="row">
				<div className="col-xs-12 col-md-4 col-md-offset-4 tac">
				  <div className="auth-signup">
				  { formToBeUsed }
				  </div>
				  <br/>
					<p>
						{ prompt[0] +" "}
						<a onClick={this.toggleSignUpAndLogin} 
						href="#">{ prompt[1] }</a></p>
				</div>
			</div>
		</div>
    );
  }
});