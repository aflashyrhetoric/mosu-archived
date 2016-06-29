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
  handleNewUserSubmit: function(newUser){
    $.ajax({
        url: '/api/v1/signup',
        dataType: 'json',
        type: 'POST',
        data: newUser,
        success: function(data) {
            // if (typeof data.error !== 'undefined') {
            //     this.setState({error: data.error});
            // } else {
            //     this.setState({ data: data, ajaxError: null});
            // }
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this),
        complete: function() {
            this.setState({loading: false});
        }.bind(this)
    });
  },
  render: function() {
  	var formToBeUsed;
  	var prompt;
  	if(this.state.newUser){
  		formToBeUsed = <App.Auth.SignUp handleNewUserSubmit={this.handleNewUserSubmit} />
  		prompt = ["Already a user?", "Login"]
  	} else {
  		formToBeUsed = <App.Auth.Login />
  		prompt = ["New to Mosu?", "Sign Up"]
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